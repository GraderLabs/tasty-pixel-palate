
import { Link, useLocation } from "react-router-dom";
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
  X,
  PlusCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Auto-close sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  // Close sidebar when navigating on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]);

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
        variant="outline"
        size="icon"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden shadow-md"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
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
          <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-none">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className={cn(
                      "flex items-center px-2 py-2 rounded-lg transition-colors group",
                      isActive 
                        ? "bg-sidebar-accent text-coral" 
                        : "hover:bg-sidebar-accent/50 text-gray-500 hover:text-coral"
                    )}
                  >
                    <div className={cn(
                      "transition-colors",
                      isActive ? "text-coral" : "text-gray-500 group-hover:text-coral"
                    )}>
                      {item.icon}
                    </div>
                    <span className={cn(
                      "ml-3 transition-all",
                      (!isOpen || (isMobile && !isOpen)) ? "opacity-0 w-0" : "opacity-100",
                      isActive ? "font-medium text-coral" : "text-sidebar-foreground group-hover:text-coral"
                    )}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              )})}
            </ul>
          </nav>

          {/* Create Recipe Button */}
          <div className="px-3 py-4">
            <Link to="/create">
              <Button className="w-full bg-coral hover:bg-coral/90 text-white" size={isOpen ? "default" : "icon"}>
                {isOpen ? (
                  <>
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Create Recipe
                  </>
                ) : (
                  <PlusCircle className="h-5 w-5" />
                )}
              </Button>
            </Link>
          </div>
          
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
