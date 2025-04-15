
import { Layout } from "@/components/layout/Layout";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";

const RecentPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-inter">Recent Recipes</h1>
          <p className="text-muted-foreground">Recipes you've recently viewed</p>
        </div>
        
        <RecipeGrid featured={false} />
      </div>
    </Layout>
  );
};

export default RecentPage;
