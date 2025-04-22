import { Link } from "react-router-dom";
import { Restaurant } from "../data/restaurants";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Utensils } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          {restaurant.featured && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-sm">
              Популярный
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{restaurant.name}</h3>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{restaurant.rating}</span>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-2">
            {restaurant.cuisine} • {restaurant.priceRange} • {restaurant.location}
          </div>
          <p className="text-sm text-gray-700 mb-2">{restaurant.description}</p>
          
          {/* Меню ресторана */}
          {restaurant.menu && restaurant.menu.length > 0 && (
            <div className="mt-3">
              <div className="flex items-center text-sm font-medium text-gray-900 mb-2">
                <Utensils className="w-4 h-4 mr-1" />
                Популярные блюда
              </div>
              <div className="space-y-2">
                {restaurant.menu.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="text-gray-900 font-medium">{item.price} ₽</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-3">
            {restaurant.categories?.map((category) => (
              <span
                key={category}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
