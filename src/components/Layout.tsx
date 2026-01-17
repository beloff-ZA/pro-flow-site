import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
  showWhatsApp?: boolean;
}

export function Layout({ children, showWhatsApp = true }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {showWhatsApp && <WhatsAppButton />}
    </div>
  );
}
