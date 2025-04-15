
import { Layout } from "@/components/layout/Layout";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";

const Index = () => {
  return (
    <Layout>
      <section className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-inter">Discover Delicious Recipes</h1>
          <p className="text-muted-foreground">Find and save the perfect recipes for any occasion</p>
        </div>
        
        <RecipeGrid title="Featured Recipes" featured={true} />
        
        <RecipeGrid title="Latest Recipes" featured={false} />
        
        <RecipeGrid title="Popular Categories" featured={false} />
      </section>
    </Layout>
  );
};

export default Index;
