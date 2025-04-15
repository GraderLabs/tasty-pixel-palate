
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Extract search query from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    if (q) {
      setSearchQuery(q);
      // Here you would typically fetch search results
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 800); // Simulate loading
    }
  }, [location.search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 800); // Simulate loading
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-inter animate-fade-in">
            {searchQuery ? `Search results for "${searchQuery}"` : "Search Recipes"}
          </h1>
          <p className="text-muted-foreground">
            {searchQuery 
              ? "Showing recipes that match your search" 
              : "Find the perfect recipe for any ingredient or occasion"
            }
          </p>
        </div>
        
        <form onSubmit={handleSearch} className="relative max-w-2xl animate-fade-in">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="search"
            placeholder="Search by ingredients, cuisine, or dish name..."
            className="pl-10 py-6 pr-32"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <Button variant="outline" type="button" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button type="submit">
              Search
            </Button>
          </div>
        </form>
        
        <RecipeGrid 
          title={isLoading ? "Searching..." : searchQuery ? undefined : "Popular Recipes"} 
          featured={!searchQuery} 
        />
      </div>
    </Layout>
  );
};

export default SearchPage;
