
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Search, Bookmark, Clock, PlusCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

export function MobileNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
    { name: "Search", icon: <Search className="w-5 h-5" />, path: "/search" },
    { name: "Create", icon: <PlusCircle className="w-6 h-6" />, path: "/create", special: true },
    { name: "Saved", icon: <Bookmark className="w-5 h-5" />, path: "/saved" },
    { name: "Recent", icon: <Clock className="w-5 h-5" />, path: "/recent" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 md:hidden">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 w-full h-full",
              item.special && "relative -top-5"
            )}
            aria-label={item.name}
          >
            <div
              className={cn(
                "rounded-full p-2 transition-colors",
                item.special ? "bg-coral text-white shadow-lg" : "",
                currentPath === item.path && !item.special ? "text-coral" : "text-muted-foreground"
              )}
            >
              {item.icon}
            </div>
            <span className={cn(
              "text-xs transition-colors",
              currentPath === item.path ? "text-foreground font-medium" : "text-muted-foreground"
            )}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
