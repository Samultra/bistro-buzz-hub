
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RestaurantList } from "@/components/RestaurantList";
import { restaurants } from "@/data/restaurants";

export default function Restaurants() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container py-10">
          <h1 className="font-playfair text-3xl font-bold mb-6 text-center">Рестораны</h1>
          <RestaurantList restaurants={restaurants} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
