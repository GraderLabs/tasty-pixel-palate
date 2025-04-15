
import { RecipeCard } from "./RecipeCard";
import { useIsMobile } from "@/hooks/use-mobile";

// Mock recipe data
const recipesData = [
  {
    id: "1",
    title: "Creamy Garlic Parmesan Pasta with Grilled Chicken",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    prepTime: 15,
    cookTime: 20,
    difficulty: "easy" as const,
    category: "Pasta",
    saved: true,
  },
  {
    id: "2",
    title: "Honey Glazed Salmon with Roasted Vegetables",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    prepTime: 10,
    cookTime: 25,
    difficulty: "medium" as const,
    category: "Seafood",
  },
  {
    id: "3",
    title: "Avocado Toast with Poached Eggs and Microgreens",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    prepTime: 5,
    cookTime: 10,
    difficulty: "easy" as const,
    category: "Breakfast",
  },
  {
    id: "4",
    title: "Spicy Thai Basil Chicken with Jasmine Rice",
    image: "https://images.unsplash.com/photo-1561626423-a51b45aef324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    prepTime: 15,
    cookTime: 15,
    difficulty: "medium" as const,
    category: "Asian",
  },
  {
    id: "5",
    title: "Mediterranean Quinoa Bowl with Roasted Vegetables and Tzatziki",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    prepTime: 20,
    cookTime: 30,
    difficulty: "easy" as const,
    category: "Vegetarian",
    saved: true,
  },
  {
    id: "6",
    title: "French Onion Soup with Gruyère Croutons",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    prepTime: 20,
    cookTime: 60,
    difficulty: "hard" as const,
    category: "Soup",
  }
];

interface RecipeGridProps {
  title?: string;
  featured?: boolean;
}

export function RecipeGrid({ title, featured = true }: RecipeGridProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-6">
      {title && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold font-inter">{title}</h2>
          <a href="#" className="text-coral hover:underline text-sm">View all</a>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {recipesData.map((recipe, index) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            featured={featured && index === 0 && !isMobile} 
          />
        ))}
      </div>
    </div>
  );
}
