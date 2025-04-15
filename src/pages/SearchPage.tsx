
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";

const SearchPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-inter">Search Recipes</h1>
          <p className="text-muted-foreground">Find the perfect recipe for any ingredient or occasion</p>
        </div>
        
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="search"
            placeholder="Search by ingredients, cuisine, or dish name..."
            className="pl-10 py-6"
          />
          <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">
            Search
          </Button>
        </div>
        
        <RecipeGrid title="Search Results" featured={false} />
      </div>
    </Layout>
  );
};

export default SearchPage;
