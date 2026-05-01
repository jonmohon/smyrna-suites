export const BUSINESS = {
  name: "Smyrna Salon Suites",
  tagline: "Your Suite. Your Business. Your Way.",
  url: "https://smyrnasalonsuites.com",
  phone: "(470) 662-8690",

  email: "Baldemjsalon@gmail.com",
  address: {
    street: "3020 Highlands Parkway, Suite G",
    city: "Smyrna",
    state: "GA",
    zip: "30082",
    full: "3020 Highlands Parkway, Suite G, Smyrna, GA 30082",
  },
  plaza: "The Integrity Heights Plaza",
  geo: { lat: 33.863, lng: -84.514 },
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5!2d-84.514!3d33.863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzQ3LjAiTiA4NMKwMzAnNTAuNCJX!5e0!3m2!1sen!2sus!4v1700000000000",

} as const;

export const JADE_SALON = {
  name: "Jade Salon of Atlanta & Head Spa",
  phone: "(470) 662-8690",
  website: "https://jadesalonofatlanta.com",
  description:
    "Our anchor salon specializes in premium hair services and authentic Japanese head spa treatments.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/luxury-salon-suites-smyrna" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Tour", href: "/book-a-tour" },
] as const;

export const PRICING = [
  {
    name: "Day Pass",
    price: "Call for Details",
    period: "",
    description: "Daily chair rental available. Perfect for trying out our space before committing.",
    features: [] as readonly string[],
    popular: false,
  },
  {
    name: "Part-Time",
    price: "Call for Details",
    period: "",
    description: "3 and 4 day part-time rates available. Private enclosed suite rental available.",
    features: [] as readonly string[],
    popular: false,
  },
  {
    name: "Full-Time",
    price: "Call for Details",
    period: "",
    description: "Full-time private enclosed suite available. The best value for building your independent business.",
    features: [] as readonly string[],
    popular: true,
  },
] as const;

export const AMENITIES = [
  {
    title: "Fully Furnished Rooms",
    description:
      "Move in and start working immediately. Each room comes equipped with a styling chair, mirror, storage, and more.",
    icon: "chair",
  },
  {
    title: "Business Support",
    description:
      "Get listed on our website, receive marketing help, and tap into expert advice to grow your business.",
    icon: "support",
  },
  {
    title: "Premium Amenities",
    description:
      "Free WiFi, utilities, parking, shared break room, and complimentary private salon laundry service. Everything you need to focus on your craft.",
    icon: "amenities",
  },
] as const;

export const STATS = [
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
      "We offer flexible pricing with day pass, part-time, and full-time options. Call for details at (470) 662-8690 to find the plan that works best for you.",
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
      "Absolutely! You are your own boss. You set your own schedule, prices, and policies.",
  },
  {
    question: "Where is Smyrna Salon Suites located?",
    answer:
      "We are located at 3020 Highlands Parkway, Suite G, Smyrna, GA 30082, inside The Integrity Heights Plaza. The plaza offers convenient free parking for you and your clients.",
  },
  {
    question: "What is the security deposit?",
    answer:
      "A security deposit is required to reserve your suite. Call us at (470) 662-8690 for details. The deposit is refundable upon move-out, provided the suite is left in good condition and all rental terms have been met.",
  },
  {
    question: "Who is Jade Salon of Atlanta & Head Spa?",
    answer:
      "Jade Salon of Atlanta & Head Spa is our anchor salon, located inside the building. They offer premium hair services and authentic Japanese head spa treatments. Suite renters have their own separate private entrance and operate independently from Jade Salon.",
  },
  {
    question: "Do you offer head spa services?",
    answer:
      "You can rent our private head spa room by the hour to offer treatments to your own clients. Or refer your clients to Jade Head Spa for personalized treatment options and earn commission discounts toward your rent. Learn more at jadesalonofatlanta.com or call (470) 662-8690.",
  },
  {
    question: "How do I book a tour?",
    answer:
      "Simply visit our Book a Tour page and fill out the short form. We'll get back to you within 24 hours to schedule a time that works for you. You can also call us directly at (470) 662-8690.",
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
