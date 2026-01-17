import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, LayoutDashboard, Users, FileText, Briefcase, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/eloff-logo.png";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [stats, setStats] = useState({ jobs: 0, requests: 0, customers: 0 });
  const [recentRequests, setRecentRequests] = useState<any[]>([]);
  const [recentJobs, setRecentJobs] = useState<any[]>([]);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      fetchData();
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate("/auth");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchData = async () => {
    const [jobsRes, requestsRes, customersRes] = await Promise.all([
      supabase.from("jobs").select("*", { count: "exact", head: true }),
      supabase.from("service_requests").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("customers").select("*", { count: "exact", head: true }),
    ]);

    setStats({
      jobs: jobsRes.count || 0,
      requests: requestsRes.data?.length || 0,
      customers: customersRes.count || 0,
    });
    setRecentRequests(requestsRes.data || []);

    const jobsData = await supabase.from("jobs").select("*").order("created_at", { ascending: false }).limit(5);
    setRecentJobs(jobsData.data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged out successfully" });
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: "bg-yellow-500",
      contacted: "bg-blue-500",
      converted: "bg-green-500",
      quote_requested: "bg-yellow-500",
      scheduled: "bg-blue-500",
      in_progress: "bg-purple-500",
      completed: "bg-green-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Eloff Plumbing" className="h-10 brightness-0 invert" />
            <h1 className="text-xl font-bold hidden sm:block">Admin Dashboard</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-primary-foreground">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container py-8">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.jobs}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Service Requests</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.requests}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.customers}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Recent Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Service Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentRequests.length === 0 ? (
                <p className="text-muted-foreground text-sm">No requests yet.</p>
              ) : (
                <div className="space-y-4">
                  {recentRequests.map((req) => (
                    <div key={req.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <div className="font-medium">{req.customer_name}</div>
                        <div className="text-sm text-muted-foreground">{req.service_type}</div>
                      </div>
                      <Badge className={getStatusColor(req.status)}>{req.status}</Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Jobs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Recent Jobs
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentJobs.length === 0 ? (
                <p className="text-muted-foreground text-sm">No jobs yet.</p>
              ) : (
                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <div className="font-medium">{job.title}</div>
                        <div className="text-sm text-muted-foreground">{job.service_type}</div>
                      </div>
                      <Badge className={getStatusColor(job.status)}>{job.status?.replace("_", " ")}</Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
