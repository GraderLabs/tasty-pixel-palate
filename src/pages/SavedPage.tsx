
import { Layout } from "@/components/layout/Layout";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";

const SavedPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-inter">Saved Recipes</h1>
          <p className="text-muted-foreground">Your collection of favorite recipes</p>
        </div>
        
        <RecipeGrid featured={false} />
      </div>
    </Layout>
  );
};

export default SavedPage;
