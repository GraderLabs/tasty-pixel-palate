
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Bell, User, Search, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border h-16 w-full">
      <div className="flex items-center justify-between h-full px-4 md:px-6 lg:pl-[300px]">
        {/* Left side on desktop - title visible when sidebar is collapsed */}
        <div className="lg:hidden">
          <h1 className="text-xl font-bold font-inter">TastyBites</h1>
        </div>
        
        {/* Search bar - hidden on small devices unless toggled */}
        <div className={cn(
          "absolute inset-x-0 top-0 h-16 px-4 md:px-6 lg:pl-[300px] lg:pr-6 transition-all duration-200 ease-in-out flex items-center bg-background/95 backdrop-blur-md",
          isSearchOpen ? "opacity-100 z-10" : "opacity-0 -z-10 lg:opacity-100 lg:z-10"
        )}>
          <form onSubmit={handleSearch} className="relative w-full max-w-2xl mx-auto lg:mx-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="search" 
              placeholder="Search recipes..." 
              className="w-full pl-10 bg-muted/30 focus:bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {isSearchOpen && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 lg:hidden"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </form>
        </div>
        
        {/* Right side - actions */}
        <div className="flex items-center ml-auto space-x-2">
          {/* Search toggle - only on small screens */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Desktop actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="User profile">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
