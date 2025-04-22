import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { restaurants } from "@/data/restaurants";
import { Star, MapPin, Phone, Globe, Clock, ChefHat, UtensilsCrossed, Image, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingForm } from '@/components/booking/BookingForm';
import { ReviewForm } from '@/components/reviews/ReviewForm';
import { useCart } from '@/components/cart/Cart';
import { useToast } from '@/components/ui/use-toast';
import { RestaurantCard } from "../components/RestaurantCard";
import { RestaurantMenu } from "../components/RestaurantMenu";

const appetizerImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
];
const mainCourseImages = [
  "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=400&q=80",
];
const dessertImages = [
  "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=400&q=80",
];

interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  priceRange: string;
  location: string;
  isOpen: boolean;
  description?: string;
  featured?: boolean;
  categories?: string[];
  menu?: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
  }[];
  reviews: {
    id: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    createdAt: string;
  }[];
}

export default function RestaurantDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const { toast } = useToast();

  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-16 text-center">
          <ChefHat className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-4">Ресторан не найден</h1>
          <p className="text-muted-foreground mb-6">
            Ресторан, который вы ищете, не существует или был удалён.
          </p>
          <Button onClick={() => window.location.href = "/"}>
            Вернуться на главную
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = (menuItem: typeof restaurant.menu[0]) => {
    addItem({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
    });
    toast({
      title: 'Добавлено в корзину',
      description: `${menuItem.name} добавлен в корзину`,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="h-64 md:h-96 relative bg-gray-200">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container py-6 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Badge className="bg-bistro-500 hover:bg-bistro-600">
              {restaurant.cuisine}
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white">
              {restaurant.priceRange}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">{restaurant.name}</h1>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-bistro-400 stroke-bistro-400" />
              <span>{restaurant.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{restaurant.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span className={restaurant.isOpen ? "text-green-400" : "text-red-400"}>
                {restaurant.isOpen ? "Открыто" : "Закрыто"}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-1 py-8">
        <div className="container">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl">{restaurant.name}</CardTitle>
                  <CardDescription>{restaurant.description}</CardDescription>
                  <p className="text-sm text-gray-500 mt-2">{restaurant.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-bold">{restaurant.rating}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Tabs defaultValue="menu">
                <TabsList className="mb-8">
                  <TabsTrigger value="menu">Меню</TabsTrigger>
                  <TabsTrigger value="info">О ресторане</TabsTrigger>
                  <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                  <TabsTrigger value="photos">Фотогалерея</TabsTrigger>
                </TabsList>
                
                <TabsContent value="menu">
                  {restaurant.menu && <RestaurantMenu menu={restaurant.menu} />}
                </TabsContent>

                <TabsContent value="info">
                  <Card>
                    <CardHeader>
                      <CardTitle>О ресторане</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{restaurant.description}</p>
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Особенности:</h4>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.categories?.map((category) => (
                            <Badge key={category} variant="secondary">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews">
                  <ReviewForm restaurantId={restaurant.id} restaurantName={restaurant.name} />
                </TabsContent>

                <TabsContent value="photos">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Здесь будут фотографии ресторана */}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Забронировать стол</CardTitle>
                </CardHeader>
                <CardContent>
                  <BookingForm restaurantId={restaurant.id} restaurantName={restaurant.name} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
