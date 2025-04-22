
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, Search, User, ChefHat, Book, Grid, Info, Contact } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Меню"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link to="/" className="flex items-center gap-2 text-bistro-700 hover:text-bistro-900">
                    <ChefHat className="h-5 w-5" />
                    <span>Главная</span>
                  </Link>
                  <Link to="/restaurants" className="flex items-center gap-2 text-muted-foreground hover:text-bistro-700">
                    <Book className="h-5 w-5" />
                    <span>Рестораны</span>
                  </Link>
                  <Link to="/categories" className="flex items-center gap-2 text-muted-foreground hover:text-bistro-700">
                    <Grid className="h-5 w-5" />
                    <span>Категории</span>
                  </Link>
                  <Link to="/about" className="flex items-center gap-2 text-muted-foreground hover:text-bistro-700">
                    <Info className="h-5 w-5" />
                    <span>О проекте</span>
                  </Link>
                  <Link to="/contacts" className="flex items-center gap-2 text-muted-foreground hover:text-bistro-700">
                    <Contact className="h-5 w-5" />
                    <span>Контакты</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link to="/" className="flex items-center gap-2 ml-2 md:ml-0">
              <ChefHat className="h-6 w-6 text-bistro-500" />
              <span className="text-xl font-playfair font-bold text-culinary-900">БистроБаззХаб</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-bistro-700">
              Главная
            </Link>
            <Link to="/restaurants" className="text-sm font-medium text-muted-foreground hover:text-bistro-700">
              Рестораны
            </Link>
            <Link to="/categories" className="text-sm font-medium text-muted-foreground hover:text-bistro-700">
              Категории
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-bistro-700">
              О проекте
            </Link>
            <Link to="/contacts" className="text-sm font-medium text-muted-foreground hover:text-bistro-700">
              Контакты
            </Link>
          </nav>
          
          <div className="flex items-center gap-2">
            {showSearch ? (
              <div className="flex items-center bg-white rounded-full border border-bistro-200 overflow-hidden pl-3 pr-1 py-1">
                <Input
                  type="search"
                  placeholder="Поиск..."
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-8 w-full md:w-[180px]"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-bistro-700"
                  onClick={() => setShowSearch(false)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Закрыть поиск</span>
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-bistro-700"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Поиск</span>
              </Button>
            )}
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-bistro-700" onClick={() => navigate("/profile")}>
              <User className="h-5 w-5" />
              <span className="sr-only">Личный кабинет</span>
            </Button>
            <Button className="hidden md:flex bg-bistro-500 hover:bg-bistro-600 text-white">
              Добавить ресторан
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
