
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, Upload, Utensils } from "lucide-react";
import { useState } from "react";

const CreateRecipePage = () => {
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState([{ text: '', image: null }]);
  
  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };
  
  const removeIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  
  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };
  
  const addInstruction = () => {
    setInstructions([...instructions, { text: '', image: null }]);
  };
  
  const removeInstruction = (index: number) => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
  };
  
  const updateInstruction = (index: number, text: string) => {
    const newInstructions = [...instructions];
    newInstructions[index].text = text;
    setInstructions(newInstructions);
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold font-inter">Create New Recipe</h1>
          <p className="text-muted-foreground">Share your delicious creations with the world</p>
        </div>
        
        <form className="space-y-8">
          {/* Basic Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter">Basic Information</h2>
              <p className="text-sm text-muted-foreground">Add the essential details about your recipe.</p>
            </div>
            
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Recipe Title</Label>
                <Input id="title" placeholder="Enter recipe title" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Write a brief description of your recipe" rows={3} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="breakfast">Breakfast</SelectItem>
                      <SelectItem value="lunch">Lunch</SelectItem>
                      <SelectItem value="dinner">Dinner</SelectItem>
                      <SelectItem value="dessert">Dessert</SelectItem>
                      <SelectItem value="snack">Snack</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select>
                    <SelectTrigger id="difficulty">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="prep-time">Prep Time (minutes)</Label>
                  <Input id="prep-time" type="number" min="0" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="cook-time">Cook Time (minutes)</Label>
                  <Input id="cook-time" type="number" min="0" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="servings">Servings</Label>
                  <Input id="servings" type="number" min="1" />
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Recipe Image */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter">Recipe Image</h2>
              <p className="text-sm text-muted-foreground">Upload a mouth-watering photo of your finished dish.</p>
            </div>
            
            <div className="border-2 border-dashed border-muted rounded-lg p-6 flex flex-col items-center justify-center gap-2">
              <Upload className="h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Drag and drop your image here or click to browse</p>
              <Button variant="outline" size="sm">Upload Image</Button>
            </div>
          </div>
          
          <Separator />
          
          {/* Ingredients */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter">Ingredients</h2>
              <p className="text-sm text-muted-foreground">List all ingredients needed for your recipe.</p>
            </div>
            
            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input 
                    value={ingredient} 
                    onChange={(e) => updateIngredient(index, e.target.value)} 
                    placeholder={`Ingredient ${index + 1}`} 
                  />
                  {ingredients.length > 1 && (
                    <Button 
                      variant="outline" 
                      size="icon" 
                      type="button" 
                      onClick={() => removeIngredient(index)}
                      aria-label="Remove ingredient"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              
              <Button 
                variant="outline" 
                type="button" 
                onClick={addIngredient} 
                className="mt-2"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Ingredient
              </Button>
            </div>
          </div>
          
          <Separator />
          
          {/* Instructions */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter">Instructions</h2>
              <p className="text-sm text-muted-foreground">Provide step-by-step instructions to prepare your recipe.</p>
            </div>
            
            <div className="space-y-4">
              {instructions.map((instruction, index) => (
                <div key={index} className="space-y-2 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`instruction-${index}`}>Step {index + 1}</Label>
                    {instructions.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        type="button" 
                        onClick={() => removeInstruction(index)}
                        aria-label="Remove step"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <Textarea 
                    id={`instruction-${index}`}
                    value={instruction.text}
                    onChange={(e) => updateInstruction(index, e.target.value)}
                    placeholder={`Describe step ${index + 1}`}
                    rows={2}
                  />
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" type="button">
                      <Upload className="mr-2 h-4 w-4" />
                      Add Image (Optional)
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                type="button" 
                onClick={addInstruction} 
                className="mt-2"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Step
              </Button>
            </div>
          </div>
          
          <Separator />
          
          {/* Additional Notes */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter">Additional Notes</h2>
              <p className="text-sm text-muted-foreground">Include any tips, variations, or storage information.</p>
            </div>
            
            <Textarea 
              placeholder="Add any additional notes or tips about your recipe" 
              rows={4}
            />
          </div>
          
          <div className="flex justify-end gap-4">
            <Button variant="outline">Save as Draft</Button>
            <Button className="bg-coral hover:bg-coral/90">
              <Utensils className="mr-2 h-4 w-4" />
              Publish Recipe
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateRecipePage;
