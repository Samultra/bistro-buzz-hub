
import { Button } from "@/components/ui/button";
import { Search } from "@/components/ui/search";

interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-bistro-50 to-white py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-culinary-900">
            Откройте лучшие рестораны города
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Найдите идеальное место для вашего обеда, ужина или встречи с друзьями!
          </p>
          <div className="max-w-md mx-auto">
            <Search 
              onSearch={onSearch} 
              placeholder="Поиск по названию, кухне или району..." 
              className="mb-4"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button variant="outline" className="rounded-full bg-white border-bistro-200 hover:bg-bistro-50">
              Топ рейтинга
            </Button>
            <Button variant="outline" className="rounded-full bg-white border-bistro-200 hover:bg-bistro-50">
              Рядом со мной
            </Button>
            <Button variant="outline" className="rounded-full bg-white border-bistro-200 hover:bg-bistro-50">
              Новые открытия
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
