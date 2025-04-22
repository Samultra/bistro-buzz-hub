export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  priceRange: string;
  location: string;
  isOpen: boolean;
  description?: string;
  featured?: boolean;
  categories?: string[];
  menu?: MenuItem[];
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Le Gourmet Bistro",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    rating: 4.8,
    cuisine: "Французская",
    priceRange: "$$$",
    location: "Центр",
    isOpen: true,
    description: "Элегантный французский бистро с современной интерпретацией классических блюд.",
    featured: true,
    categories: ["fine-dining", "romantic"],
    menu: [
      { 
        id: "1", 
        name: "Фуа-гра с трюфелями", 
        description: "Утиная печень с черными трюфелями и ягодным соусом", 
        price: 4500, 
        category: "Закуски",
        image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=300&q=80"
      },
      { 
        id: "2", 
        name: "Луковый суп", 
        description: "Классический французский луковый суп с сырной корочкой", 
        price: 1800, 
        category: "Супы",
        image: "https://eda.ru/images/RecipePhoto/390x390/francuzskij-lukovij-sup_50785_photo_55946.jpg"
      },
      { 
        id: "3", 
        name: "Беф бургиньон", 
        description: "Тушеная говядина в красном вине с овощами", 
        price: 3200, 
        category: "Основные блюда",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=300&q=80"
      },
      { 
        id: "4", 
        name: "Крем-брюле", 
        description: "Классический французский десерт с карамельной корочкой", 
        price: 1500, 
        category: "Десерты",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  {
    id: "2",
    name: "Sakura Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    rating: 4.5,
    cuisine: "Японская",
    priceRange: "$$",
    location: "Набережная",
    isOpen: true,
    description: "Аутентичные суши из свежих местных ингредиентов.",
    featured: true,
    categories: ["casual", "lunch"],
    menu: [
      { 
        id: "1", 
        name: "Сет Сакура", 
        description: "Ассорти из 24 кусочков: лосось, тунец, креветки", 
        price: 3500, 
        category: "Сеты",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80"
      },
      { 
        id: "2", 
        name: "Рамен с говядиной", 
        description: "Традиционный японский суп с говядиной и яйцом", 
        price: 2200, 
        category: "Супы",
        image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=300&q=80"
      },
      { 
        id: "3", 
        name: "Темпура", 
        description: "Овощи и креветки в хрустящем кляре", 
        price: 2800, 
        category: "Закуски",
        image: "https://images.unsplash.com/photo-1581489158588-801378bd4f81?auto=format&fit=crop&w=300&q=80"
      },
      { 
        id: "4", 
        name: "Мохито с лаймом", 
        description: "Освежающий десерт с лаймом и мятой", 
        price: 1600, 
        category: "Десерты",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  {
    id: "3",
    name: "Mamma Mia Trattoria",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbGlhbiUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    rating: 4.6,
    cuisine: "Итальянская",
    priceRange: "$$",
    location: "Маленькая Италия",
    isOpen: true,
    description: "Семейный итальянский ресторан с домашней пастой и пиццей из дровяной печи.",
    featured: true,
    categories: ["family-friendly", "casual"],
    menu: [
      { 
        id: "1", 
        name: "Карпаччо", 
        description: "Тонко нарезанная говядина с рукколой и пармезаном", 
        price: 2500, 
        category: "Закуски",
        image: "https://images.unsplash.com/photo-1598511796432-32663d0875bd?auto=format&fit=crop&w=300&q=80"
      },
      { 
        id: "2", 
        name: "Паста Карбонара", 
        description: "Спагетти с беконом, яйцом и пармезаном", 
        price: 1900, 
        category: "Паста",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=300&q=80"
      },
      { 
        id: "3", 
        name: "Пицца Маргарита", 
        description: "Классическая пицца с томатами и моцареллой", 
        price: 1700, 
        category: "Пицца",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=300&q=80"
      },
      { 
        id: "4", 
        name: "Тирамису", 
        description: "Классический итальянский десерт", 
        price: 1500, 
        category: "Десерты",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  {
    id: "4",
    name: "The Spice Route",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    rating: 4.3,
    cuisine: "Индийская",
    priceRange: "$$",
    location: "Центральный район",
    isOpen: true,
    description: "Аутентичная индийская кухня с широким выбором вегетарианских и невегетарианских блюд.",
    categories: ["spicy", "group-dining"],
    menu: [
      { id: "1", name: "Самоса с картофелем", description: "Хрустящие пирожки с картофелем и специями", price: 1200, category: "Закуски" },
      { id: "2", name: "Тандури Чикен", description: "Курица, маринованная в йогурте и специях, запеченная в тандыре", price: 2800, category: "Основные блюда" },
      { id: "3", name: "Баттер Чикен", description: "Курица в сливочном соусе с томатами и специями", price: 2500, category: "Основные блюда" },
      { id: "4", name: "Гулаб Джамун", description: "Сладкие шарики из молока в сахарном сиропе", price: 900, category: "Десерты" }
    ]
  },
  {
    id: "5",
    name: "El Sombrero",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    rating: 4.4,
    cuisine: "Мексиканская",
    priceRange: "$",
    location: "Южный район",
    isOpen: true,
    description: "Яркий мексиканский ресторан, известный своими уличными тако и маргаритой.",
    categories: ["casual", "drinks"],
    menu: [
      { id: "1", name: "Гуакамоле", description: "Авокадо с помидорами, луком и кинзой", price: 1500, category: "Закуски" },
      { id: "2", name: "Тако с говядиной", description: "Три кукурузных тако с говядиной, сальсой и авокадо", price: 1800, category: "Основные блюда" },
      { id: "3", name: "Кесадилья", description: "Лепешка с сыром, курицей и овощами", price: 1600, category: "Основные блюда" },
      { id: "4", name: "Чуррос", description: "Хрустящие палочки с корицей и шоколадным соусом", price: 1200, category: "Десерты" }
    ]
  },
  {
    id: "6",
    name: "Golden Dragon",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    rating: 4.2,
    cuisine: "Китайская",
    priceRange: "$$",
    location: "Чайнатаун",
    isOpen: true,
    description: "Традиционный китайский ресторан, специализирующийся на димсам и кантонской кухне.",
    categories: ["group-dining", "lunch"],
    menu: [
      { id: "1", name: "Димсам", description: "Ассорти из 8 паровых пельменей с разными начинками", price: 2200, category: "Закуски" },
      { id: "2", name: "Утка по-пекински", description: "Хрустящая утка с блинами и соусом", price: 3800, category: "Основные блюда" },
      { id: "3", name: "Кисло-сладкая свинина", description: "Свинина в кисло-сладком соусе с ананасом", price: 2500, category: "Основные блюда" },
      { id: "4", name: "Манговый пудинг", description: "Нежный пудинг с манго и кокосовым молоком", price: 1400, category: "Десерты" }
    ]
  },
  {
    id: "7",
    name: "Burger Joint",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    rating: 4.1,
    cuisine: "Американская",
    priceRange: "$",
    location: "Университетский район",
    isOpen: true,
    description: "Уютное место для гурманов, где подают бургеры, крафтовое пиво и картофель фри ручной нарезки.",
    categories: ["casual", "quick-bite"],
    menu: [
      { id: "1", name: "Чизбургер", description: "Классический бургер с говяжьей котлетой и сыром", price: 1200, category: "Бургеры" },
      { id: "2", name: "Бургер с беконом", description: "Бургер с беконом, сыром и соусом барбекю", price: 1500, category: "Бургеры" },
      { id: "3", name: "Картофель фри", description: "Хрустящий картофель фри с соусами", price: 800, category: "Гарниры" },
      { id: "4", name: "Молочный коктейль", description: "Классический молочный коктейль с ванилью", price: 900, category: "Напитки" }
    ]
  },
  {
    id: "8",
    name: "Mediterranean Delight",
    image: "https://lh3.googleusercontent.com/p/AF1QipOXNNczhMRnzhdAgiNAYEKaToIysYHT9vmMNWii=s680-w680-h510",
    rating: 4.7,
    cuisine: "Средиземноморская",
    priceRange: "$$",
    location: "Вид на гавань",
    isOpen: true,
    description: "Свежая средиземноморская кухня с акцентом на морепродукты и вегетарианские блюда.",
    featured: true,
    categories: ["healthy", "romantic"],
    menu: [
      { id: "1", name: "Хумус с питой", description: "Нутовый паштет с теплой питой и оливками", price: 1800, category: "Закуски" },
      { id: "2", name: "Греческий салат", description: "Свежие овощи, фета, оливки и оливковое масло", price: 2200, category: "Салаты" },
      { id: "3", name: "Паэлья с морепродуктами", description: "Испанское блюдо с рисом, морепродуктами и шафраном", price: 4500, category: "Основные блюда" },
      { id: "4", name: "Баклава", description: "Слоеный десерт с орехами и медом", price: 1600, category: "Десерты" }
    ]
  },
  {
    id: "9",
    name: "Thai Orchid",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    rating: 4.3,
    cuisine: "Тайская",
    priceRange: "$$",
    location: "Район искусств",
    isOpen: true,
    description: "Аутентичная тайская кухня с разными уровнями остроты на любой вкус.",
    categories: ["spicy", "casual"],
    menu: [
      { id: "1", name: "Том Ям", description: "Острый суп с креветками, грибами и лемонграссом", price: 2200, category: "Супы" },
      { id: "2", name: "Пад Тай", description: "Жареная рисовая лапша с курицей и овощами", price: 1900, category: "Основные блюда" },
      { id: "3", name: "Зеленое карри", description: "Курица в зеленом карри с кокосовым молоком", price: 2500, category: "Основные блюда" },
      { id: "4", name: "Манго с клейким рисом", description: "Сладкий рис с кокосовым молоком и свежим манго", price: 1500, category: "Десерты" }
    ]
  }
];

export const categories = [
  { id: "fine-dining", name: "Высокая кухня" },
  { id: "casual", name: "Повседневная" },
  { id: "family-friendly", name: "Семейная" },
  { id: "romantic", name: "Романтическая" },
  { id: "group-dining", name: "Для компаний" },
  { id: "quick-bite", name: "Быстрый перекус" },
  { id: "healthy", name: "Здоровая" },
  { id: "lunch", name: "Бизнес-ланч" },
  { id: "drinks", name: "Напитки" },
  { id: "spicy", name: "Острая" }
];
