
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Info } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50 flex flex-col items-center justify-center">
        <div className="container max-w-2xl py-14">
          <div className="flex flex-col items-center gap-3">
            <Info className="h-12 w-12 text-bistro-500" />
            <h1 className="font-playfair text-3xl font-bold mb-2">О проекте</h1>
            <p className="text-muted-foreground text-center">
              BistroBuzzHub — это удобная платформа для поиска и бронирования ресторанов в вашем городе. Мы собрали лучшие заведения и предлагаем простой способ найти, сравнить и выбрать ресторан по душе!
            </p>
            <p className="text-muted-foreground text-center mt-2">
              Проект создан с заботой о вас и поддерживает рестораны со всего города.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
