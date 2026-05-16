import jokesApartFlyer from "@/assets/jokes-apart-flyer.webp";

export { jokesApartFlyer };

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
  detailUrl?: string;
  image?: string;
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
    ticketUrl: "https://crm.gasup.ai/v2/preview/L1MkUz1ic0x1ZzLd5qJH",
    detailUrl: "/events/jokes-apart",
    image: jokesApartFlyer,
    featured: true,
  },
];


import v1Thumb from "@/assets/v1.webp";
import v2Thumb from "@/assets/v2.webp";
import v3Thumb from "@/assets/v3.webp";
import v4Thumb from "@/assets/v4.webp";
import v5Thumb from "@/assets/v5.webp";
import v6Thumb from "@/assets/v6.webp";
import v7Thumb from "@/assets/v7.webp";
import v8Thumb from "@/assets/v8.webp";

export interface VideoItem {
  id: string;
  title: string;
  label: string;
  category: "On Stage" | "Weddings" | "Cultural Events" | "Comedy" | "Behind the Scenes";
  url: string;
  thumbnail: string;
}

const CDN = "https://assets.cdn.filesafe.space/anudewnYrwCmf0LVpuJw/media";

export const videos: VideoItem[] = [
  { id: "v1", title: "Stage Energy",            label: "Live Performance",   category: "On Stage",          url: `${CDN}/69fb1fbd0394c9850352be78.mov`, thumbnail: v1Thumb },
  { id: "v2", title: "The Crowd Goes Wild",     label: "Event Hosting",      category: "On Stage",          url: `${CDN}/6a0069aebc1f77cc3556a41e.mov`, thumbnail: v2Thumb },
  { id: "v3", title: "Comedy Night Highlights", label: "Stand-Up",           category: "Comedy",            url: `${CDN}/6a006567939c0e5f20116e27.mov`, thumbnail: v3Thumb },
  { id: "v4", title: "Wedding MC Moment",       label: "Wedding",            category: "Weddings",          url: `${CDN}/69fb2de10394c98503560c37.mov`, thumbnail: v4Thumb },
  { id: "v5", title: "Cultural Festival Vibes", label: "Cultural Event",     category: "Cultural Events",   url: `${CDN}/6a0069af0f3ad81fbdf557fd.mov`, thumbnail: v5Thumb },
  { id: "v6", title: "Corporate Event Hosting", label: "Corporate",          category: "On Stage",          url: `${CDN}/69fb2de19594baa062da8edc.mov`, thumbnail: v6Thumb },
  { id: "v7", title: "Birthday Bash",           label: "Private Party",      category: "On Stage",          url: `${CDN}/69fb1fbd7167fd9a35bf7809.mov`, thumbnail: v7Thumb },
  { id: "v8", title: "Backstage & Beyond",      label: "Behind the Scenes",  category: "Behind the Scenes", url: `${CDN}/6a006567f8231fbf0b1d9741.mov`, thumbnail: v8Thumb },
];

import newsTraditionalWedding from "@/assets/news-traditional-wedding.webp";
import newsHereWeGoAgain from "@/assets/news-here-we-go-again.webp";
import newsNewYam from "@/assets/news-new-yam-festival.webp";
import news40thBirthday from "@/assets/news-40th-birthday.webp";
import newsChildDedication from "@/assets/news-child-dedication.webp";
import newsScholarships from "@/assets/news-scholarships.webp";

export type PostCategory = "Lifestyle" | "Wedding" | "Cultural" | "Comedy" | "Announcements";

export interface PostItem {
  id: string;
  title: string;
  category: PostCategory;
  excerpt: string;
  body: string;
  date: string;
  author: string;
  image?: string;
  externalLink?: { label: string; url: string };
}

export const posts: PostItem[] = [
  {
    id: "scholarships-uk-2026",
    title: "Scholarships in United Kingdom For International Students",
    category: "Lifestyle",
    excerpt: "International students are welcome to apply for scholarships open for the 2026 and 2027 academic years across different disciplines in various UK universities.",
    body: "International students are welcome to apply for scholarships open for the 2026 and 2027 academic years across different disciplines in various universities in the United Kingdom. The scholarships are provided by governments, private organizations, and universities and are either fully or partially funded.\n\nThis page is updated regularly to include new and active scholarships in the UK for international students, so bookmark it to check back for newly added scholarships.",
    date: "April 15, 2026",
    author: "Administrator",
    image: newsScholarships,
    externalLink: { label: "Click here to Apply", url: "https://booklab24.com/scholarships-in-united-kingdom-for-international-students/" },
  },
  {
    id: "traditional-wedding",
    title: "Traditional Wedding",
    category: "Wedding",
    excerpt: "A beautiful celebration of love, culture, and heritage, this traditional wedding ceremony was a true reflection of unity.",
    body: "A beautiful celebration of love, culture, and heritage, this traditional wedding ceremony was a true reflection of unity. From the colourful attire to the heartfelt vows and rich traditions, every moment was filled with meaning. Anchored with energy, structure and respect for the customs, the day flowed seamlessly from arrival of guests to the final dance.",
    date: "March 26, 2026",
    author: "IGWE DE MC",
    image: newsTraditionalWedding,
  },
  {
    id: "here-we-go-again",
    title: "HERE WE GO AGAIN !!",
    category: "Lifestyle",
    excerpt: "Another opportunity to create unforgettable moments, connect with people, and bring energy to the room.",
    body: "Another opportunity to create unforgettable moments, connect with people, and bring energy to the room. Every event is a new stage, a new audience and a new chance to deliver the kind of experience people will talk about for years.",
    date: "March 26, 2026",
    author: "IGWE DE MC",
    image: newsHereWeGoAgain,
  },
  {
    id: "new-yam-festival-dorset",
    title: "Igbo Community Day and New Yam Festival in Dorset – Anchored by Igwe De MC",
    category: "Cultural",
    excerpt: "From the ceremonial presentation of the new yam to cultural performances, every moment was handled with precision.",
    body: "From the ceremonial presentation of the new yam to cultural performances, every moment was handled with precision. Anchoring this event was a privilege — celebrating heritage, community and the traditions that bind us together as Igbo people in the UK.",
    date: "March 7, 2026",
    author: "IGWE DE MC",
    image: newsNewYam,
  },
  {
    id: "40th-birthday",
    title: "40th Birthday Party Celebration",
    category: "Lifestyle",
    excerpt: "Turning 40 is more than a milestone — it's a celebration of life, growth, and the journey so far.",
    body: "Turning 40 is more than a milestone — it's a celebration of life, growth, and the journey so far. Hosting this party was about creating moments the celebrant and their guests will never forget.",
    date: "March 7, 2026",
    author: "IGWE DE MC",
    image: news40thBirthday,
  },
  {
    id: "child-dedication-wales",
    title: "Child Dedication Ceremony in Wales",
    category: "Lifestyle",
    excerpt: "A heartfelt child dedication ceremony filled with love, gratitude, and community.",
    body: "A heartfelt child dedication ceremony filled with love, gratitude, and community. Travelling to Wales to anchor this beautiful occasion was a reminder of how powerful family and faith are when brought together.",
    date: "March 7, 2026",
    author: "IGWE DE MC",
    image: newsChildDedication,
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
