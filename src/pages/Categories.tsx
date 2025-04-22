
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Grid, UtensilsCrossed } from "lucide-react";

const categories = [
  { name: "Европейская кухня", icon: <UtensilsCrossed className="text-bistro-500" /> },
  { name: "Азиатская кухня", icon: <UtensilsCrossed className="text-bistro-500" /> },
  { name: "Вегетарианская кухня", icon: <UtensilsCrossed className="text-bistro-500" /> },
  { name: "Десерты", icon: <UtensilsCrossed className="text-bistro-500" /> },
];

export default function Categories() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container py-10">
          <h1 className="font-playfair text-3xl font-bold mb-6 text-center">Категории</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col items-center gap-3 rounded-xl bg-white shadow p-6">
                {cat.icon}
                <span className="font-medium">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
