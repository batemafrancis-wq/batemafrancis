export type Service = {
  icon: string;
  title: string;
  description: string;
};

export type ExpertiseItem = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type Product = {
  tag: string;
  title: string;
  emoji: string;
  c1: string;
  c2: string;
  img: string;
  desc: string;
  features: string[];
  impact: string;
};

export type Testimonial = {
  name: string;
  role: string;
  stars: number;
  quote: string;
  src: string;
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#products", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#journey", label: "Journey" },
  { href: "#about", label: "About" },
];

export const services: Service[] = [
  {
    icon: "🌐",
    title: "Websites & Web Apps",
    description:
      "Fast, beautiful websites that bring your business online and turn visitors into customers.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Smooth Android & iOS apps that keep your customers connected wherever they are.",
  },
  {
    icon: "⚙️",
    title: "SaaS & Enterprise",
    description:
      "Powerful management systems for schools, libraries, clinics and growing companies.",
  },
  {
    icon: "🚀",
    title: "Launch & Growth",
    description:
      "Hosting, HTTPS security, Cloudflare speed and SEO so people actually find you on Google.",
  },
];

export const expertise: ExpertiseItem[] = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "I design how your website looks and feels — making it attractive, easy to use and pleasant, so visitors enjoy it and keep coming back.",
    tags: ["Figma", "Wireframes", "Branding"],
  },
  {
    icon: "🖥️",
    title: "Frontend Development",
    description:
      "I build everything you see and click on screen — buttons, menus, pages — and make sure it works perfectly on phones, tablets and computers.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: "🔐",
    title: "Backend Development",
    description:
      'The "engine room" behind the scenes — safely storing your data, handling payments, logins and everything that makes your system actually work.',
    tags: ["Node.js", "PHP", "Databases", "APIs"],
  },
  {
    icon: "⚡",
    title: "Performance & Optimization",
    description:
      "I make websites load fast, rank higher on Google and stay secure — because a slow site loses customers before they even see it.",
    tags: ["SEO", "HTTPS", "Cloudflare", "Speed"],
  },
];

export const journey: TimelineEntry[] = [
  {
    year: "2022",
    title: "🌱 The Beginning",
    description:
      "Started learning how websites are built — writing my first pages and falling in love with turning ideas into things people can see and use.",
  },
  {
    year: "2024",
    title: "💼 First Client Projects",
    description:
      "Built my first paid websites for small businesses in Kampala — simple, fast sites that helped shops get found online.",
  },
  {
    year: "2025",
    title: "📱 Going Mobile",
    description:
      "Opened up the mobile app development so businesses could reach customers right on their phones — bookings, orders and updates in one tap.",
  },
  {
    year: "2026",
    title: "🏫 Bigger Systems",
    description:
      "Delivered full management systems — school management, library systems and e-commerce platforms handling real daily operations.",
  },
  {
    year: "2022",
    title: "🚀 Working with Essence",
    description:
      "Launched Essence — a studio of engineers and creatives with one promise: deliver nothing less than perfection.",
  },
  {
    year: "2026",
    title: "🤝 10+ Projects Strong",
    description:
      "Crossed 10 delivered projects — restaurants, spas, salons like Rajat Beauty Parlour and Salon, gyms and more.",
  },
  {
    year: "Today",
    title: "⭐ 2+ Years of Expertise",
    description:
      "Leading a full team from Latitude One Suites, Ntinda — building websites, web apps and mobile apps trusted across Uganda and beyond.",
  },
];

export const slides = [
  {
    src: "/images/slide1.jpg",
    alt: "Developer workspace with website code on screens",
    caption: "Crafting clean, modern code every day",
  },
  {
    src: "/images/slide2.jpg",
    alt: "Team collaborating on a website design in Kampala office",
    caption: "Collaborating with our talented team in Kampala",
  },
  {
    src: "/images/slide3.jpg",
    alt: "Responsive website shown on laptop, tablet and phone",
    caption: "Responsive designs that shine on every device",
  },
];

export const products: Product[] = [
  {
    tag: "Education",
    title: "BUGEMA UNIVERSITY GRADUATION CLEARANCE",
    emoji: "🏫",
    c1: "#0ea5e9",
    c2: "#2563eb",
    img: "/images/products/bug.png",
    desc: "Manages students, fees, report cards and parent communication in one place.",
    features: [
      "Student records & Clearance",
      "Fees billing & receipts",
      "Auto report card generation",
      "SMS alerts to parents",
    ],
    impact: "Cut admin paperwork by 70% for a 1,200-student school.",
  },
  {
    tag: "Education",
    title: "Library Management",
    emoji: "📚",
    c1: "#1e40af",
    c2: "#0891b2",
    img: "/images/products/library.jpg",
    desc: "Tracks books, borrowers and returns with barcode scanning support.",
    features: [
      "Catalogue with barcode scan",
      "Borrow/return tracking",
      "Overdue reminders",
      "Usage reports",
    ],
    impact: "Reduced lost books by 80% at a university library.",
  },
  {
    tag: "Hospitality",
    title: "DineEasy — Restaurant Website",
    emoji: "🍽️",
    c1: "#f59e0b",
    c2: "#dc2626",
    img: "/images/products/restaurant.jpg",
    desc: "Digital menu, table reservations and online food ordering for restaurants.",
    features: [
      "QR digital menu",
      "Table reservations",
      "Online ordering",
      "Customer reviews",
    ],
    impact: "Doubled weekend bookings for a Kampala restaurant.",
  },
  {
    tag: "Wellness",
    title: "AURA Spa Booking System",
    emoji: "💆",
    c1: "#8b5cf6",
    c2: "#ec4899",
    img: "/images/products/aura.png",
    desc: "Elegant spa site with treatment menus and automated appointment booking.",
    features: [
      "Service & price menus",
      "Online appointment booking",
      "Staff scheduling",
      "SMS reminders",
    ],
    impact: "Cut no-shows by 45% with automatic reminders.",
  },
  {
    tag: "Wellness",
    title: "Serene Spa Booking System",
    emoji: "💆",
    c1: "#8b5cf6",
    c2: "#ec4899",
    img: "/images/products/serene.png",
    desc: "Elegant spa site with treatment menus and automated appointment booking.",
    features: [
      "Service & price menus",
      "Online appointment booking",
      "Staff scheduling",
      "SMS reminders",
    ],
    impact: "Cut no-shows by 45% with automatic reminders.",
  },
  {
    tag: "Beauty",
    title: "Rajat Beauty Parlour",
    emoji: "💄",
    c1: "#ec4899",
    c2: "#f43f5e",
    img: "/images/products/rajat.jpg",
    desc: "A stylish salon website with gallery, services and instant WhatsApp booking.",
    features: [
      "Style gallery",
      "Service price list",
      "WhatsApp booking button",
      "Google Maps directions",
    ],
    impact: "New client walk-ins up 50% from online discovery.",
  },
  {
    tag: "Beauty",
    title: "Uzuri Hair Salon",
    emoji: "💇",
    c1: "#a855f7",
    c2: "#6366f1",
    img: "/images/products/uzuri.png",
    desc: "Modern salon platform with stylist profiles and loyalty rewards.",
    features: [
      "Stylist profiles & booking",
      "Loyalty points system",
      "Before/after gallery",
      "Mobile-first design",
    ],
    impact: "Repeat bookings grew 40% with loyalty rewards.",
  },
  {
    tag: "Fitness",
    title: "FitPro — Gym Membership",
    emoji: "🏋️",
    c1: "#16a34a",
    c2: "#0d9488",
    img: "/images/products/gym.jpg",
    desc: "Gym website with class timetables, membership signup and payments.",
    features: [
      "Class timetable",
      "Online membership signup",
      "Payment tracking",
      "Trainer profiles",
    ],
    impact: "Automated 90% of membership renewals.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rajat Princess",
    role: "Owner, Rajat Beauty Parlour",
    stars: 5,
    quote:
      "Our salon website brought us so many new clients. Batema explained everything in simple terms and delivered on time. Highly recommended!",
    src: "/images/products/rajat.jpg",
  },
  {
    name: "AURA Spa Manager",
    role: "Manager, AURA Spa",
    stars: 5,
    quote:
      "The online booking system changed how we run the spa. No-shows dropped dramatically and our clients love booking from their phones.",
    src: "/images/products/aura.png",
  },
  {
    name: "Uzuri Hair Salon Owner",
    role: "Owner, Uzuri Hair Salon",
    stars: 5,
    quote:
      "The salon site is beautiful and our regulars keep coming back for the loyalty rewards. Repeat bookings have never been this easy.",
    src: "/images/products/uzuri.png",
  },
  {
    name: "DineEasy Restaurant Owner",
    role: "Owner, DineEasy Restaurant",
    stars: 5,
    quote:
      "Our digital menu and online ordering doubled weekend bookings. Customers book tables from the QR code at the door — brilliant.",
    src: "/images/products/restaurant.jpg",
  },
  {
    name: "FitPro Gym Director",
    role: "Director, FitPro Gym",
    stars: 5,
    quote:
      "Membership renewals used to take hours of manual work. Now almost everything is automated and our classes are always full.",
    src: "/images/products/gym.jpg",
  },
];

export const heroStats = [
  { count: 2, suffix: "+", label: "Years Experience" },
  { count: 20, suffix: "+", label: "Projects Delivered" },
  { value: "4.5", suffix: "★", label: "Average Rating" },
];

export const svgThumb = (emoji: string, label: string, c1: string, c2: string) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="360">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
      </linearGradient></defs>
      <rect width="600" height="360" fill="url(#g)"/>
      <text x="300" y="160" font-size="90" text-anchor="middle">${emoji}</text>
      <text x="300" y="250" font-size="30" font-weight="bold" fill="white" text-anchor="middle" font-family="Inter,Arial">${label}</text>
    </svg>`,
  );
