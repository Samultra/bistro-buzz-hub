import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  History, 
  Settings, 
  MapPin, 
  Phone, 
  Mail, 
  Edit, 
  Star, 
  Clock, 
  Calendar,
  CreditCard,
  LogOut
} from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Моковые данные пользователя
  const userData = {
    name: "Татьяна Мороз",
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67",
    address: "ул. Ленина, 10, кв. 25",
    avatar: "/Татьяна.jpg",
    orders: [
      {
        id: "1",
        restaurant: "Ресторан 'У Михалыча'",
        date: "15.03.2024",
        status: "Завершен",
        total: 2500,
        items: [
          { name: "Борщ", price: 350, quantity: 2 },
          { name: "Пельмени", price: 450, quantity: 1 },
          { name: "Компот", price: 150, quantity: 2 }
        ]
      },
      {
        id: "2",
        restaurant: "Пиццерия 'Додо'",
        date: "10.03.2024",
        status: "Завершен",
        total: 1800,
        items: [
          { name: "Пицца Маргарита", price: 600, quantity: 1 },
          { name: "Кола", price: 150, quantity: 2 }
        ]
      }
    ],
    favorites: [
      {
        id: "1",
        name: "Ресторан 'У Михалыча'",
        rating: 4.8,
        cuisine: "Русская",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
      },
      {
        id: "2",
        name: "Пиццерия 'Додо'",
        rating: 4.5,
        cuisine: "Итальянская",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Боковая панель с информацией о пользователе */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={userData.avatar} />
                      <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl">{userData.name}</CardTitle>
                  <CardDescription>Участник с марта 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-bistro-500" />
                      <span>{userData.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-bistro-500" />
                      <span>{userData.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-bistro-500" />
                      <span>{userData.address}</span>
                    </div>
                    <Button variant="outline" className="w-full" onClick={() => setIsEditing(!isEditing)}>
                      <Edit className="mr-2 h-4 w-4" />
                      {isEditing ? "Сохранить изменения" : "Редактировать профиль"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Основной контент */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="orders" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="orders">
                    <History className="mr-2 h-4 w-4" />
                    Заказы
                  </TabsTrigger>
                  <TabsTrigger value="favorites">
                    <Star className="mr-2 h-4 w-4" />
                    Избранное
                  </TabsTrigger>
                  <TabsTrigger value="settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Настройки
                  </TabsTrigger>
                </TabsList>

                {/* Вкладка заказов */}
                <TabsContent value="orders" className="space-y-4">
                  {userData.orders.map((order) => (
                    <Card key={order.id}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle className="text-lg">{order.restaurant}</CardTitle>
                            <CardDescription>
                              <Calendar className="inline mr-1 h-4 w-4" />
                              {order.date}
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold">{order.total} ₽</div>
                            <div className="text-sm text-green-600">{order.status}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between">
                              <span>{item.name} × {item.quantity}</span>
                              <span>{item.price * item.quantity} ₽</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Вкладка избранного */}
                <TabsContent value="favorites" className="space-y-4">
                  {userData.favorites.map((favorite) => (
                    <Card key={favorite.id}>
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <img
                            src={favorite.image}
                            alt={favorite.name}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{favorite.name}</h3>
                            <p className="text-muted-foreground">{favorite.cuisine}</p>
                            <div className="flex items-center gap-1 mt-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <span>{favorite.rating}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Вкладка настроек */}
                <TabsContent value="settings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Личные данные</CardTitle>
                      <CardDescription>Обновите вашу личную информацию</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя</label>
                        <Input defaultValue={userData.name} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" defaultValue={userData.email} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Телефон</label>
                        <Input defaultValue={userData.phone} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Адрес</label>
                        <Input defaultValue={userData.address} />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Безопасность</CardTitle>
                      <CardDescription>Управление паролем и безопасностью</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Текущий пароль</label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Новый пароль</label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Подтвердите новый пароль</label>
                        <Input type="password" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Уведомления</CardTitle>
                      <CardDescription>Настройте предпочтения уведомлений</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email уведомления</h4>
                          <p className="text-sm text-muted-foreground">
                            Получать уведомления о заказах и акциях
                          </p>
                        </div>
                        <Button variant="outline">Включить</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">SMS уведомления</h4>
                          <p className="text-sm text-muted-foreground">
                            Получать SMS о статусе заказа
                          </p>
                        </div>
                        <Button variant="outline">Включить</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Button variant="destructive" className="w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    Выйти из аккаунта
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
