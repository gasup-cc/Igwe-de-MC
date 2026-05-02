export type EventCategory = "Concert" | "DJ Night" | "Private Party" | "Corporate" | "Wedding" | "Birthday";

export interface EventItem {
  id: string;
  name: string;
  day: string;
  month: string;
  year: string;
  time: string;
  venue: string;
  city: string;
  price: string;
  category: EventCategory;
  ticketUrl?: string;
  soldOut?: boolean;
  past?: boolean;
  featured?: boolean;
}

export const events: EventItem[] = [
  {
    id: "jokes-apart-2026",
    name: "JOKES APART",
    day: "25",
    month: "JUL",
    year: "2026",
    time: "Doors: 6:00 PM",
    venue: "Novotel Southampton",
    city: "Southampton",
    price: "£50",
    category: "Concert",
    ticketUrl: "https://www.eventbrite.co.uk/e/igwe-de-mc-jokes-apart-tickets-1986010202979",
    featured: true,
  },
];

export interface VideoItem {
  id: string;
  title: string;
  category: "On Stage" | "Weddings" | "Cultural Events" | "Comedy" | "Behind the Scenes";
  duration: string;
  views: string;
  date: string;
}

export const videos: VideoItem[] = [];

export type PostCategory = "Lifestyle" | "Wedding" | "Cultural" | "Comedy" | "Announcements";

export interface PostItem {
  id: string;
  title: string;
  category: PostCategory;
  excerpt: string;
  body: string;
  date: string;
  author: string;
}

export const posts: PostItem[] = [
  {
    id: "traditional-wedding",
    title: "Traditional Wedding",
    category: "Wedding",
    excerpt: "A beautiful celebration of love, culture, and heritage, this traditional wedding ceremony was a true reflection of unity.",
    body: "A beautiful celebration of love, culture, and heritage, this traditional wedding ceremony was a true reflection of unity. From the colourful attire to the heartfelt vows and rich traditions, every moment was filled with meaning. Anchored with energy, structure and respect for the customs, the day flowed seamlessly from arrival of guests to the final dance.",
    date: "March 26, 2026",
    author: "IGWE DE MC",
  },
  {
    id: "here-we-go-again",
    title: "HERE WE GO AGAIN !!",
    category: "Lifestyle",
    excerpt: "Another opportunity to create unforgettable moments, connect with people, and bring energy to the room.",
    body: "Another opportunity to create unforgettable moments, connect with people, and bring energy to the room. Every event is a new stage, a new audience and a new chance to deliver the kind of experience people will talk about for years.",
    date: "March 26, 2026",
    author: "IGWE DE MC",
  },
  {
    id: "new-yam-festival-dorset",
    title: "Igbo Community Day and New Yam Festival in Dorset – Anchored by Igwe De MC",
    category: "Cultural",
    excerpt: "From the ceremonial presentation of the new yam to cultural performances, every moment was handled with precision.",
    body: "From the ceremonial presentation of the new yam to cultural performances, every moment was handled with precision. Anchoring this event was a privilege — celebrating heritage, community and the traditions that bind us together as Igbo people in the UK.",
    date: "March 7, 2026",
    author: "IGWE DE MC",
  },
  {
    id: "40th-birthday",
    title: "40th Birthday Party Celebration",
    category: "Lifestyle",
    excerpt: "Turning 40 is more than a milestone — it's a celebration of life, growth, and the journey so far.",
    body: "Turning 40 is more than a milestone — it's a celebration of life, growth, and the journey so far. Hosting this party was about creating moments the celebrant and their guests will never forget.",
    date: "March 7, 2026",
    author: "IGWE DE MC",
  },
  {
    id: "child-dedication-wales",
    title: "Child Dedication Ceremony in Wales",
    category: "Lifestyle",
    excerpt: "A heartfelt child dedication ceremony filled with love, gratitude, and community.",
    body: "A heartfelt child dedication ceremony filled with love, gratitude, and community. Travelling to Wales to anchor this beautiful occasion was a reminder of how powerful family and faith are when brought together.",
    date: "March 7, 2026",
    author: "IGWE DE MC",
  },
];

export const services = [
  { name: "Concert / Live Performance", icon: "Mic2", desc: "High-energy hosting for live music & comedy nights." },
  { name: "DJ Night", icon: "Disc3", desc: "Hype the crowd from first track to final beat." },
  { name: "Private Party", icon: "PartyPopper", desc: "Intimate gatherings with unforgettable energy." },
  { name: "Corporate Event", icon: "Briefcase", desc: "Polished hosting for awards, dinners, conferences." },
  { name: "Wedding", icon: "Heart", desc: "Master of ceremony for traditional & contemporary weddings." },
  { name: "Birthday Party", icon: "Cake", desc: "Milestone celebrations done right." },
  { name: "Other", icon: "Sparkles", desc: "Festivals, dedications, cultural events & more." },
];

export const testimonials = [
  { name: "Chinwe O.", event: "Wedding", quote: "Igwe held our entire day together with grace and humour. Every guest is still talking about him." },
  { name: "Marcus R.", event: "Corporate Gala", quote: "Sharp, charismatic, and incredibly professional. He elevated the whole evening." },
  { name: "Adaeze N.", event: "New Yam Festival", quote: "He carried our culture with so much respect. Truly a master of his craft." },
  { name: "Tomi B.", event: "40th Birthday", quote: "Best decision we made for the party. Energy from start to finish." },
  { name: "James W.", event: "Comedy Night", quote: "Had the entire room in tears of laughter. Genuine talent." },
];
