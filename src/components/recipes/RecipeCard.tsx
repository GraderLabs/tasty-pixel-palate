
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ChefHat, Bookmark, Share2, Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: {
    id: string;
    title: string;
    image: string;
    prepTime: number;
    cookTime: number;
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
    saved?: boolean;
  };
  featured?: boolean;
}

export function RecipeCard({ recipe, featured = false }: RecipeCardProps) {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  const difficultyColor = {
    easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
  };

  return (
    <Card className={cn(
      "overflow-hidden rounded-recipe animate-hover shadow-recipe",
      featured && "col-span-2 md:flex"
    )}>
      <div className={cn(
        "relative",
        featured ? "md:w-1/2" : "w-full"
      )}>
        <Link to={`/recipe/${recipe.id}`}>
          <div className="aspect-[16/9] overflow-hidden bg-muted">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="object-cover w-full h-full transition-transform duration-recipe hover:scale-105"
            />
          </div>
        </Link>
        <Badge className="absolute top-3 left-3 bg-primary">
          {recipe.category}
        </Badge>
      </div>
      
      <div className={cn(
        "flex flex-col",
        featured && "md:w-1/2"
      )}>
        <CardHeader className="pb-2">
          <Link to={`/recipe/${recipe.id}`} className="group">
            <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-coral transition-colors">
              {recipe.title}
            </h3>
          </Link>
        </CardHeader>
        
        <CardContent className="py-2">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              <span>{totalTime} min</span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline" className={cn("flex items-center", difficultyColor[recipe.difficulty])}>
                <ChefHat className="mr-1 h-3 w-3" />
                <span className="capitalize">{recipe.difficulty}</span>
              </Badge>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between pt-2 mt-auto">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label={recipe.saved ? "Unsave recipe" : "Save recipe"}>
              <Bookmark className={cn("h-5 w-5", recipe.saved && "fill-coral text-coral")} />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Share recipe">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Print recipe">
              <Printer className="h-5 w-5" />
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
