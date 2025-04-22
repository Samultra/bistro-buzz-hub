import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Bistro Buzz Hub</h3>
            <p className="text-muted-foreground mb-4">
              Соединяем любителей еды с лучшими ресторанами города.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-bistro-700 hover:bg-bistro-50">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-bistro-700 hover:bg-bistro-50">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-bistro-700 hover:bg-bistro-50">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-bistro-700 hover:bg-bistro-50">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  Популярные рестораны
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  Добавить ресторан
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  Блог и новости
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  Помощь и поддержка
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Категории</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  Высокая кухня
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  Кафе и бистро
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  Уличная еда
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  Бары и пабы
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-bistro-700">
                  Вегетарианские
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-bistro-500" />
                <span className="text-muted-foreground">ул. Петровская, 109А</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-bistro-500" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-bistro-700">
                  +7 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-bistro-500" />
                <a href="mailto:info@bistrobuzzhub.com" className="text-muted-foreground hover:text-bistro-700">
                  info@bistrobuzzhub.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bistro Buzz Hub. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-bistro-700">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-bistro-700">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
