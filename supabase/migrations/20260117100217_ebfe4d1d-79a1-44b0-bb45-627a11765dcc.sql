-- Create profiles table for admin users
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'technician')),
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create customers table
CREATE TABLE public.customers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  address TEXT,
  suburb TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- Customers policies (only authenticated admins can access)
CREATE POLICY "Authenticated users can view customers" ON public.customers FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert customers" ON public.customers FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update customers" ON public.customers FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete customers" ON public.customers FOR DELETE TO authenticated USING (true);

-- Create service_requests table for form submissions
CREATE TABLE public.service_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  address TEXT,
  service_type TEXT NOT NULL,
  message TEXT,
  urgency TEXT DEFAULT 'normal' CHECK (urgency IN ('normal', 'urgent', 'emergency')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'converted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

-- Service requests policies (public can insert, only authenticated can view/manage)
CREATE POLICY "Anyone can submit service requests" ON public.service_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated users can view service requests" ON public.service_requests FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can update service requests" ON public.service_requests FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete service requests" ON public.service_requests FOR DELETE TO authenticated USING (true);

-- Create jobs table
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES public.customers(id) ON DELETE SET NULL,
  service_request_id UUID REFERENCES public.service_requests(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  service_type TEXT NOT NULL,
  address TEXT NOT NULL,
  status TEXT DEFAULT 'quote_requested' CHECK (status IN ('quote_requested', 'scheduled', 'in_progress', 'completed', 'cancelled')),
  scheduled_date DATE,
  scheduled_time TIME,
  technician_notes TEXT,
  parts_used TEXT,
  time_spent TEXT,
  quote_amount DECIMAL(10,2),
  final_amount DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Jobs policies
CREATE POLICY "Authenticated users can view jobs" ON public.jobs FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert jobs" ON public.jobs FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update jobs" ON public.jobs FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete jobs" ON public.jobs FOR DELETE TO authenticated USING (true);

-- Create job_photos table
CREATE TABLE public.job_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE NOT NULL,
  photo_url TEXT NOT NULL,
  photo_type TEXT DEFAULT 'before' CHECK (photo_type IN ('before', 'after', 'during')),
  caption TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.job_photos ENABLE ROW LEVEL SECURITY;

-- Job photos policies
CREATE POLICY "Authenticated users can view job photos" ON public.job_photos FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert job photos" ON public.job_photos FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can delete job photos" ON public.job_photos FOR DELETE TO authenticated USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON public.customers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_service_requests_updated_at BEFORE UPDATE ON public.service_requests FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON public.jobs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for job photos
INSERT INTO storage.buckets (id, name, public) VALUES ('job-photos', 'job-photos', true);

-- Storage policies
CREATE POLICY "Anyone can view job photos" ON storage.objects FOR SELECT USING (bucket_id = 'job-photos');
CREATE POLICY "Authenticated users can upload job photos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'job-photos');
CREATE POLICY "Authenticated users can delete job photos" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'job-photos');