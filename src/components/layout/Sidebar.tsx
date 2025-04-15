
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  Home, 
  Search, 
  Bookmark, 
  Clock, 
  ChefHat, 
  Settings, 
  Menu, 
  X 
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();
  
  // Auto-close sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { name: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
    { name: "Search", icon: <Search className="w-5 h-5" />, path: "/search" },
    { name: "Saved", icon: <Bookmark className="w-5 h-5" />, path: "/saved" },
    { name: "Recent", icon: <Clock className="w-5 h-5" />, path: "/recent" },
    { name: "Categories", icon: <ChefHat className="w-5 h-5" />, path: "/categories" },
    { name: "Settings", icon: <Settings className="w-5 h-5" />, path: "/settings" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-50 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          isOpen ? "w-[280px]" : "w-0 lg:w-20", 
          isMobile && !isOpen && "w-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center justify-center px-4 border-b border-sidebar-border">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-coral" />
              <span className={cn("font-inter font-bold text-xl transition-opacity duration-200", 
                (!isOpen || (isMobile && !isOpen)) ? "opacity-0" : "opacity-100"
              )}>TastyBites</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="flex items-center px-2 py-2 rounded-lg hover:bg-sidebar-accent transition-colors group"
                  >
                    <div className="text-gray-500 group-hover:text-coral transition-colors">
                      {item.icon}
                    </div>
                    <span className={cn(
                      "ml-3 text-sidebar-foreground group-hover:text-coral transition-all",
                      (!isOpen || (isMobile && !isOpen)) ? "opacity-0 w-0" : "opacity-100"
                    )}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className={cn(
            "p-4 border-t border-sidebar-border flex",
            isOpen ? "justify-between" : "justify-center"
          )}>
            <ThemeToggle />
            {isOpen && !isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                aria-label="Collapse sidebar"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
