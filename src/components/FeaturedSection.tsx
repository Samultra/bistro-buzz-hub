import { RestaurantCard } from "./RestaurantCard";
import { Restaurant } from "@/data/restaurants";

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  restaurants: Restaurant[];
}

export function FeaturedSection({ title, subtitle, restaurants }: FeaturedSectionProps) {
  return (
    <section className="py-10">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
