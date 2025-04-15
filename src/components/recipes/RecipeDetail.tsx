
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Users, 
  ChefHat, 
  Printer, 
  Share2, 
  Bookmark, 
  Star 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function RecipeDetail() {
  const { toast } = useToast();

  const handlePrint = () => {
    toast({
      title: "Preparing print version",
      description: "Your recipe is being formatted for printing"
    });
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Creamy Garlic Parmesan Pasta",
          text: "Check out this delicious recipe!",
          url: window.location.href,
        });
        toast({
          title: "Shared successfully",
          description: "Thanks for sharing this recipe!"
        });
      } catch (error) {
        console.error("Error sharing:", error);
        fallbackShare();
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied to clipboard",
      description: "You can now paste and share the recipe link"
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 print:space-y-4">
      {/* Hero Section */}
      <div className="relative rounded-recipe overflow-hidden">
        <img 
          src="/placeholder.svg" 
          alt="Creamy Garlic Parmesan Pasta" 
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-1">Creamy Garlic Parmesan Pasta</h1>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  onClick={handlePrint}
                >
                  <Printer className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white text-sm ml-1">(124 reviews)</span>
            </div>
            <p className="text-white/90 mb-4">A quick and easy pasta dish that's perfect for weeknight dinners. Creamy, garlicky, and utterly delicious.</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-md px-3 py-1">
                <Clock className="h-4 w-4 text-white mr-2" />
                <span className="text-white text-sm">25 mins</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-md px-3 py-1">
                <Users className="h-4 w-4 text-white mr-2" />
                <span className="text-white text-sm">4 servings</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-md px-3 py-1">
                <ChefHat className="h-4 w-4 text-white mr-2" />
                <span className="text-white text-sm">Easy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:block">
        {/* Ingredients */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4 print:static">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold font-inter">Ingredients</h2>
            <Button variant="outline" size="sm" className="hidden md:flex print:hidden">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
          <ul className="space-y-2">
            {[
              "8 oz pasta (fettuccine or linguine)",
              "3 tablespoons butter",
              "4 cloves garlic, minced",
              "1 cup heavy cream",
              "1 cup freshly grated Parmesan cheese",
              "½ teaspoon salt",
              "¼ teaspoon black pepper",
              "Fresh parsley, chopped (for garnish)",
              "Red pepper flakes (optional)",
            ].map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-coral/10 text-coral flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold font-inter">Instructions</h2>
          <div className="space-y-6">
            {[
              {
                text: "Bring a large pot of salted water to boil. Cook pasta according to package directions until al dente. Reserve ½ cup of pasta water before draining.",
                image: null
              },
              {
                text: "While pasta is cooking, melt butter in a large skillet over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant but not browned.",
                image: "/placeholder.svg"
              },
              {
                text: "Reduce heat to medium-low and add heavy cream to the skillet. Simmer for 2-3 minutes until it starts to thicken slightly.",
                image: null
              },
              {
                text: "Gradually whisk in the grated Parmesan cheese, stirring continuously until melted and smooth.",
                image: "/placeholder.svg"
              },
              {
                text: "Season the sauce with salt and black pepper. If the sauce is too thick, add some of the reserved pasta water, a tablespoon at a time, until desired consistency is reached.",
                image: null
              },
              {
                text: "Add the drained pasta to the sauce and toss to coat evenly. Cook for another minute to allow the pasta to absorb some of the sauce.",
                image: null
              },
              {
                text: "Serve immediately, garnished with chopped parsley and red pepper flakes if desired.",
                image: "/placeholder.svg"
              }
            ].map((step, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-coral text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p>{step.text}</p>
                </div>
                {step.image && (
                  <img 
                    src={step.image} 
                    alt={`Step ${index + 1}`} 
                    className="rounded-lg w-full h-[200px] object-cover mt-3 ml-11"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-8 bg-muted/20 p-4 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Chef's Notes</h3>
            <p>For an extra flavor boost, add a splash of white wine to the sauce before adding the cream. You can also use half and half instead of heavy cream for a lighter version.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
