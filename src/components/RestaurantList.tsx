import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { CategoryFilter } from "./CategoryFilter";
import { Search } from "./ui/search";
import { Restaurant, categories } from "@/data/restaurants";
import { Button } from "./ui/button";
import { ChefHat } from "lucide-react";

interface RestaurantListProps {
  restaurants: Restaurant[];
  initialCategory?: string | null;
}

export function RestaurantList({ restaurants, initialCategory = null }: RestaurantListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  
  const filteredRestaurants = restaurants.filter(restaurant => {
    const categoryMatch = !selectedCategory || restaurant.categories?.includes(selectedCategory);
    const query = searchQuery.toLowerCase();
    const searchMatch = !query || 
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.cuisine.toLowerCase().includes(query) ||
      restaurant.location.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
  
  const displayedRestaurants = filteredRestaurants.slice(0, visibleCount);
  const hasMore = displayedRestaurants.length < filteredRestaurants.length;

  const handleLoadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 3, filteredRestaurants.length));
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div className="md:w-1/3">
            <Search 
              onSearch={setSearchQuery} 
              placeholder="Поиск ресторанов..." 
            />
          </div>
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <ChefHat className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">Рестораны не найдены</h3>
            <p className="text-muted-foreground">
              Попробуйте изменить параметры поиска или фильтрации.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-10">
                <Button 
                  onClick={handleLoadMore}
                  variant="outline"
                  className="border-bistro-200 hover:bg-bistro-50 hover:text-bistro-700"
                >
                  Показать ещё
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
