
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedSection } from "@/components/FeaturedSection";
import { RestaurantList } from "@/components/RestaurantList";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { restaurants } from "@/data/restaurants";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const featuredRestaurants = restaurants.filter(restaurant => restaurant.featured);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const restaurantSection = document.getElementById("restaurants");
    if (restaurantSection) {
      restaurantSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero onSearch={handleSearch} />
        <FeaturedSection 
          title="Избранные рестораны" 
          subtitle="Откройте для себя самые популярные заведения вашего города"
          restaurants={featuredRestaurants}
        />
        <div id="restaurants" className="scroll-mt-20">
          <div className="bg-gray-50 py-8">
            <div className="container">
              <h2 className="font-playfair text-3xl font-bold text-center">Все рестораны</h2>
            </div>
          </div>
          <RestaurantList restaurants={restaurants} />
        </div>
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
