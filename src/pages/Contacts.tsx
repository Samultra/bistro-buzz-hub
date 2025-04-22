import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contacts() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container py-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h1 className="font-playfair text-3xl font-bold mb-6">Контакты</h1>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-bistro-500 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      ул. Петровская, 109А<br />
                      г. Москва, Россия
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-bistro-500 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Телефон</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+71234567890" className="hover:text-bistro-700">
                        +7 (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-bistro-500 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@bistrobuzzhub.com" className="hover:text-bistro-700">
                        info@bistrobuzzhub.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-bistro-500 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Часы работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.371787819344!2d37.618423!3d55.751244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab7c8d1a3f8e5%3A0x4f5f5f5f5f5f5f5f!2z0YPQuy4g0J_QtdGC0YDQvtCy0YHQutCw0Y8sIDEwOdCwLCDQnNC-0YHQutCy0LA!5e0!3m2!1sru!2sru!4v1645543212345!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
