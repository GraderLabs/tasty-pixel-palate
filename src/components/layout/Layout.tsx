
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MobileNavbar } from "./MobileNavbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />
      <Header />
      <main className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        "lg:ml-[280px]", // Default with open sidebar
        "pt-16 pb-16 md:pb-0", // Add top padding to avoid header overlap
      )}>
        <div className="container mx-auto px-4 py-6 md:py-8">
          {children}
        </div>
      </main>
      <MobileNavbar />
    </div>
  );
}
