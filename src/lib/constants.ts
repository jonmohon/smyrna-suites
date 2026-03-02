export const BUSINESS = {
  name: "Smyrna Salon Suites",
  tagline: "Your Suite. Your Business. Your Way.",
  url: "https://smyrnasalonsuites.com",
  phone: "(470) 662-8690",
  phoneSecondary: "(404) 919-8893",
  email: "Baldemjsalon@gmail.com",
  address: {
    street: "3020 Highlands Parkway, Suite G",
    city: "Smyrna",
    state: "GA",
    zip: "30082",
    full: "3020 Highlands Parkway, Suite G, Smyrna, GA 30082",
  },
  plaza: "Integrity Heights Plaza",
  geo: { lat: 33.863, lng: -84.514 },
  hours: "Mo-Su 09:00-19:00",
  hoursDisplay: "Mon–Sun 9am–7pm",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5!2d-84.514!3d33.863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzQ3LjAiTiA4NMKwMzAnNTAuNCJX!5e0!3m2!1sen!2sus!4v1700000000000",
  formspreeId: "xpwzgkvy",
} as const;

export const JADE_SALON = {
  name: "Jade Salon of Atlanta & Head Spa",
  phone: "(770) 349-6024",
  website: "https://jadesalonofatlanta.com",
  description:
    "Our anchor salon specializes in premium hair services and authentic Japanese head spa treatments.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Tour", href: "/book-a-tour" },
] as const;

export const PRICING = [
  {
    name: "Day Pass",
    price: "$75",
    period: "/day",
    features: [
      "Full suite access for the day",
      "WiFi & utilities included",
      "Shared amenities access",
      "Perfect for trial visits",
    ],
    popular: false,
  },
  {
    name: "Part-Time",
    price: "$200",
    period: "/week",
    features: [
      "3 days per week access",
      "WiFi & utilities included",
      "All amenities included",
      "Flexible scheduling",
    ],
    popular: false,
  },
  {
    name: "Full-Time",
    price: "$350",
    period: "/week",
    features: [
      "24/7 suite access",
      "WiFi & utilities included",
      "All amenities included",
      "1 free week after 6 months",
      "Priority suite selection",
    ],
    popular: true,
  },
] as const;

export const AMENITIES = [
  {
    title: "Fully Furnished Suites",
    description:
      "Move in and start working immediately. Each suite comes equipped with a styling chair, mirror, storage, and more.",
    icon: "chair",
  },
  {
    title: "Business Support",
    description:
      "Get listed on our website and Jade Salon's site. We help promote your business to drive traffic to your suite.",
    icon: "support",
  },
  {
    title: "Premium Amenities",
    description:
      "Free WiFi, utilities, parking, and shared break room. Everything you need to focus on your craft.",
    icon: "amenities",
  },
] as const;

export const STATS = [
  { label: "24/7 Access", icon: "clock" },
  { label: "Free Parking", icon: "parking" },
  { label: "WiFi Included", icon: "wifi" },
  { label: "Utilities Included", icon: "utilities" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is a salon suite?",
    answer:
      "A salon suite is a private, fully furnished space where you can run your own beauty or barbering business independently. You get your own lockable suite with everything you need to serve clients, without the overhead of renting an entire storefront.",
  },
  {
    question: "How much does it cost to rent a suite?",
    answer:
      "We offer flexible pricing: Day Pass at $75/day, Part-Time at $200/week (3 days), and Full-Time at $350/week (24/7 access). A $500 security deposit is required to secure your suite. Full-time renters receive 1 free week after 6 months!",
  },
  {
    question: "What is included in my rental?",
    answer:
      "Every suite comes fully furnished with a styling chair, mirror, and storage. WiFi, utilities, free parking, and access to shared amenities are all included in your rental price. Just bring your tools and products!",
  },
  {
    question: "Do I need to bring my own equipment?",
    answer:
      "Suites come fully furnished with the basics — styling chair, mirror, and storage. You just need to bring your personal tools, products, and any specialty equipment for your services.",
  },
  {
    question: "Can I set my own hours and prices?",
    answer:
      "Absolutely! You are your own boss. You set your own schedule, prices, and policies. Full-time renters have 24/7 access to their suite, so you can work whenever it suits you and your clients.",
  },
  {
    question: "Where is Smyrna Salon Suites located?",
    answer:
      "We are located at 3020 Highlands Parkway, Suite G, Smyrna, GA 30082, inside Integrity Heights Plaza. The plaza offers convenient free parking for you and your clients.",
  },
  {
    question: "What is the security deposit?",
    answer:
      "A $500 security deposit is required to reserve your suite. This deposit is refundable upon move-out, provided the suite is left in good condition and all rental terms have been met.",
  },
  {
    question: "Who is Jade Salon of Atlanta & Head Spa?",
    answer:
      "Jade Salon of Atlanta & Head Spa is our anchor salon, located inside the building. They offer premium hair services and authentic Japanese head spa treatments. As a suite renter, you benefit from the foot traffic and reputation Jade Salon brings to the location.",
  },
  {
    question: "Do you offer head spa services?",
    answer:
      "Head spa treatments are offered by Jade Salon of Atlanta & Head Spa, our anchor salon. You can learn more about their services at jadesalonofatlanta.com or by calling (770) 349-6024.",
  },
  {
    question: "How do I book a tour?",
    answer:
      "Simply visit our Book a Tour page and fill out the short form. We'll get back to you within 24 hours to schedule a time that works for you. You can also call us directly at (470) 662-8690 or (404) 919-8893.",
  },
] as const;

export const PROFESSIONS = [
  "Hair Stylist",
  "Barber",
  "Braider / Loctician",
  "Nail Technician",
  "Esthetician",
  "Massage Therapist",
  "Makeup Artist",
  "Other",
] as const;
