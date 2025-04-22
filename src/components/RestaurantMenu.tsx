import { Restaurant } from "@/data/restaurants";
import { Button } from "./ui/button";
import { Utensils } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

interface RestaurantMenuProps {
  menu: MenuItem[];
}

export function RestaurantMenu({ menu }: RestaurantMenuProps) {
  if (!menu || menu.length === 0) return null;

  // Группируем блюда по категориям
  const menuByCategory = menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Меню</h2>

      {Object.entries(menuByCategory).map(([category, items]) => (
        <div key={category} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Utensils className="w-5 h-5 text-yellow-500" />
            <h3 className="text-xl font-semibold">{category}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  {item.image && (
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.description}
                        </p>
                        <span className="text-lg font-semibold text-orange-500">
                          {item.price} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
                    Заказать
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 