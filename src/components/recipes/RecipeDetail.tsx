
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Clock, 
  ChefHat, 
  Users, 
  Bookmark, 
  Share2, 
  Printer, 
  ArrowLeft,
  Check 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock recipe data (in a real app, this would come from an API)
const recipeData = {
  id: "1",
  title: "Creamy Garlic Parmesan Pasta with Grilled Chicken",
  image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  prepTime: 15,
  cookTime: 20,
  difficulty: "easy" as const,
  category: "Pasta",
  servings: 4,
  description: "A deliciously creamy pasta dish that's perfect for a weeknight dinner. The combination of garlic, parmesan, and grilled chicken creates a satisfying meal that everyone will love.",
  ingredients: [
    "8 oz fettuccine pasta",
    "2 boneless, skinless chicken breasts",
    "2 tbsp olive oil, divided",
    "3 cloves garlic, minced",
    "1 cup heavy cream",
    "1 cup grated Parmesan cheese",
    "1/2 tsp salt",
    "1/4 tsp black pepper",
    "1/4 tsp red pepper flakes (optional)",
    "2 tbsp fresh parsley, chopped"
  ],
  instructions: [
    {
      step: 1,
      text: "Cook pasta according to package instructions until al dente. Reserve 1/2 cup of pasta water before draining.",
      image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 2,
      text: "Season chicken breasts with salt and pepper. Heat 1 tbsp olive oil in a large skillet over medium-high heat. Cook chicken for 5-7 minutes per side until fully cooked (internal temperature of 165°F). Remove from pan, let rest, then slice."
    },
    {
      step: 3,
      text: "In the same skillet, heat remaining olive oil over medium heat. Add minced garlic and cook for 30 seconds until fragrant.",
      image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 4,
      text: "Reduce heat to medium-low and add heavy cream. Simmer for 2-3 minutes until it begins to thicken slightly."
    },
    {
      step: 5,
      text: "Gradually whisk in Parmesan cheese until melted and sauce is smooth. Add salt, black pepper, and red pepper flakes if using."
    },
    {
      step: 6,
      text: "Add drained pasta to the sauce and toss to coat. If sauce is too thick, add reserved pasta water a little at a time until desired consistency is reached.",
      image: "https://images.unsplash.com/photo-1603729362760-75d461248213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 7,
      text: "Place sliced chicken on top of pasta and sprinkle with fresh parsley before serving."
    }
  ],
  nutrition: {
    calories: 650,
    protein: 35,
    carbs: 45,
    fat: 38,
    fiber: 2,
    sugar: 3
  },
  notes: "For a lighter version, you can substitute half-and-half for the heavy cream. If you want a vegetarian option, you can omit the chicken and add sautéed mushrooms instead."
};

export function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState(recipeData);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  
  // In a real app, you'd fetch the recipe based on id
  useEffect(() => {
    // Fetch recipe data logic would go here
    console.log(`Fetching recipe with id: ${id}`);
  }, [id]);
  
  const toggleStepCompletion = (step: number) => {
    setCompletedSteps(prev => 
      prev.includes(step) 
        ? prev.filter(s => s !== step)
        : [...prev, step]
    );
  };
  
  const toggleSave = () => {
    setIsSaved(prev => !prev);
  };
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to recipes
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-inter">{recipe.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-1 h-4 w-4" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Users className="mr-1 h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
          
          <Badge variant="outline" className={cn(
            "flex items-center",
            recipe.difficulty === "easy" 
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
              : recipe.difficulty === "medium"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
          )}>
            <ChefHat className="mr-1 h-3 w-3" />
            <span className="capitalize">{recipe.difficulty}</span>
          </Badge>
          
          <Badge className="bg-primary">
            {recipe.category}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Button 
            variant="outline" 
            onClick={toggleSave}
            className={cn(isSaved && "text-coral")}
          >
            <Bookmark className={cn("mr-2 h-4 w-4", isSaved && "fill-coral")} />
            {isSaved ? "Saved" : "Save"}
          </Button>
          
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recipe image */}
        <div className="lg:col-span-2">
          <div className="rounded-recipe overflow-hidden mb-6">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 font-inter">Description</h2>
            <p className="text-muted-foreground">{recipe.description}</p>
          </div>
          
          <Tabs defaultValue="instructions" className="mb-8">
            <TabsList>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="instructions" className="pt-4">
              <div className="space-y-6">
                {recipe.instructions.map((instruction) => (
                  <div key={instruction.step} className="flex">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "h-8 w-8 rounded-full mr-4 shrink-0 mt-1",
                        completedSteps.includes(instruction.step) 
                          ? "bg-coral text-white hover:bg-coral/90 hover:text-white"
                          : "border"
                      )}
                      onClick={() => toggleStepCompletion(instruction.step)}
                      aria-label={`Mark step ${instruction.step} as ${completedSteps.includes(instruction.step) ? 'incomplete' : 'complete'}`}
                    >
                      {completedSteps.includes(instruction.step) && <Check className="h-4 w-4" />}
                      {!completedSteps.includes(instruction.step) && <span>{instruction.step}</span>}
                    </Button>
                    
                    <div className="space-y-3">
                      <p className={completedSteps.includes(instruction.step) ? "line-through text-muted-foreground" : ""}>
                        {instruction.text}
                      </p>
                      
                      {instruction.image && (
                        <img 
                          src={instruction.image} 
                          alt={`Step ${instruction.step}`} 
                          className="rounded-lg w-full max-w-md mt-2"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="nutrition" className="pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-muted">
                  <div className="text-sm text-muted-foreground">Calories</div>
                  <div className="text-2xl font-medium">{recipe.nutrition.calories}</div>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <div className="text-sm text-muted-foreground">Protein</div>
                  <div className="text-2xl font-medium">{recipe.nutrition.protein}g</div>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <div className="text-sm text-muted-foreground">Carbs</div>
                  <div className="text-2xl font-medium">{recipe.nutrition.carbs}g</div>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <div className="text-sm text-muted-foreground">Fat</div>
                  <div className="text-2xl font-medium">{recipe.nutrition.fat}g</div>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <div className="text-sm text-muted-foreground">Fiber</div>
                  <div className="text-2xl font-medium">{recipe.nutrition.fiber}g</div>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <div className="text-sm text-muted-foreground">Sugar</div>
                  <div className="text-2xl font-medium">{recipe.nutrition.sugar}g</div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notes" className="pt-4">
              <p className="text-muted-foreground">{recipe.notes}</p>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Ingredients sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-card rounded-recipe p-6 shadow-recipe">
            <h2 className="text-xl font-semibold mb-4 font-inter">Ingredients</h2>
            <p className="text-sm text-muted-foreground mb-4">for {recipe.servings} servings</p>
            
            <Separator className="mb-4" />
            
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-coral mt-2 mr-3"></div>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
            
            <Separator className="my-4" />
            
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Prep time:</span>
                <span>{recipe.prepTime} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cook time:</span>
                <span>{recipe.cookTime} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total time:</span>
                <span>{recipe.prepTime + recipe.cookTime} min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
