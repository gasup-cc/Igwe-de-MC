import type { LegalSection, LegalContact } from "@/pages/LegalPage";

const STANDARD_CONTACT_LINES = {
  email: "info@igwedemc.uk",
  phone: "+44 7733 751948 | +234 806 367 8240",
  location: "United Kingdom",
};

export const bookingPolicyContent: { title: string; goldTitle: string; subtitle: string; effectiveDate: string; sections: LegalSection[]; contact: LegalContact } = {
  title: "Event Booking",
  goldTitle: "Policy",
  subtitle: "Official booking terms for Igwe De MC performances and appearances",
  effectiveDate: "1st March 2026",
  sections: [
    { heading: "Introduction", paragraphs: ["This Booking Policy outlines the terms for booking Igwe De MC for events, performances, and appearances."] },
    {
      heading: "Booking Requests",
      paragraphs: ["All booking requests must be submitted through:"],
      list: ["The official website booking form", "Email: info@igwedemc.uk"],
      subsections: [
        { heading: "Booking requests should include:", list: ["Event date", "Event location", "Type of event", "Expected audience size", "Organizer contact details"] },
      ],
    },
    {
      heading: "Booking Confirmation",
      paragraphs: ["A booking is considered confirmed only after:"],
      list: ["Agreement on performance terms", "Payment of the required booking deposit"],
      subsections: [{ heading: "Availability", paragraphs: ["Until confirmation is received, the requested date remains open and may be offered to other clients."] }],
    },
    {
      heading: "Payment Terms",
      list: [
        "A deposit may be required to secure the booking date.",
        "Full payment terms will be discussed and agreed upon between the event organizer and the management team.",
        "Failure to meet payment terms may result in cancellation of the booking.",
      ],
    },
    {
      heading: "Travel and Accommodation",
      paragraphs: ["For events outside the performer's base location, the event organizer may be responsible for:"],
      list: ["Travel arrangements", "Accommodation", "Local transportation"],
      subsections: [{ heading: "Agreement", paragraphs: ["Specific requirements will be agreed upon during booking discussions."] }],
    },
    {
      heading: "Event Changes",
      paragraphs: ["Event organizers must notify management immediately if there are changes to:"],
      list: ["Event date", "Venue", "Event schedule"],
      subsections: [{ heading: "Availability", paragraphs: ["Changes are subject to availability."] }],
    },
    {
      heading: "Cancellation Policy",
      paragraphs: ["If an event is canceled after confirmation:"],
      list: [
        "Deposits may be non-refundable depending on the timing of cancellation.",
        "Specific cancellation terms will be included in the booking agreement.",
      ],
    },
    {
      heading: "Performance Conduct",
      paragraphs: ["Event organizers must ensure a safe, professional, and respectful environment for the performance."],
    },
  ],
  contact: { heading: "Contact", intro: "For booking inquiries:", ...STANDARD_CONTACT_LINES },
};

export const termsContent: { title: string; goldTitle: string; subtitle: string; effectiveDate: string; sections: LegalSection[]; contact: LegalContact } = {
  title: "Terms and",
  goldTitle: "Conditions",
  subtitle: "Official terms governing use of the IGWE DE MC website",
  effectiveDate: "1st March 2026",
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "These Terms and Conditions govern your use of the official website of Igwe De MC.",
        "By accessing or using this website, you agree to comply with these terms.",
      ],
    },
    {
      heading: "Website Use",
      paragraphs: [
        "This website is provided for informational, entertainment, and booking purposes related to performances, media content, and events.",
        "Users agree not to:",
      ],
      list: [
        "Use the website for unlawful purposes",
        "Attempt to disrupt the website's functionality",
        "Copy or distribute website content without permission",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: ["All content on this website including:"],
      list: ["Videos", "Images", "Logos", "Graphics", "Text", "Branding"],
      subsections: [{
        heading: "Ownership",
        paragraphs: [
          "belongs to Igwe De MC unless otherwise stated.",
          "Unauthorized reproduction or distribution of this content is prohibited.",
        ],
      }],
    },
    { heading: "Event Information", paragraphs: ["We aim to ensure all event details displayed on the website are accurate. However, event schedules, venues, or dates may change without prior notice."] },
    { heading: "External Links", paragraphs: ["Our website may include links to external websites. We are not responsible for the content or privacy practices of those websites."] },
    {
      heading: "Limitation of Liability",
      paragraphs: ["We are not responsible for any damages or losses resulting from:"],
      list: ["Use of the website", "Technical interruptions", "Errors in information", "Third-party services"],
    },
    { heading: "Changes to Terms", paragraphs: ["We reserve the right to modify these Terms and Conditions at any time. Continued use of the website indicates acceptance of updated terms."] },
  ],
  contact: { heading: "Contact Information", intro: "For questions regarding these terms, contact:", ...STANDARD_CONTACT_LINES },
};

export const cookiePolicyContent: { title: string; goldTitle: string; subtitle: string; effectiveDate: string; sections: LegalSection[]; contact: LegalContact } = {
  title: "Cookie",
  goldTitle: "Policy",
  subtitle: "How we use cookies and similar technologies on IGWE DE MC",
  effectiveDate: "1st March 2026",
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "This Cookie Policy explains how the official website of Igwe De MC uses cookies and similar technologies when you visit our website.",
        "By using our website, you consent to the use of cookies in accordance with this policy.",
      ],
    },
    { heading: "What Are Cookies", paragraphs: ["Cookies are small text files stored on your device when you visit a website. They help the website recognize your device and improve your browsing experience."] },
    {
      heading: "Types of Cookies We Use",
      subsections: [
        { heading: "Essential Cookies", paragraphs: ["These cookies are necessary for the website to function properly. Without them, some features of the website may not work."] },
        { heading: "Performance Cookies", paragraphs: ["These cookies help us understand how visitors interact with the website by collecting information such as:"], list: ["Pages visited", "Time spent on the website", "Errors encountered"] },
        { heading: "Functional Cookies", paragraphs: ["These cookies remember user preferences such as:"], list: ["Language preferences", "Previously entered information", "Display settings"] },
        { heading: "Analytics Cookies", paragraphs: ["We may use analytics tools to measure website traffic and understand how users navigate the website."] },
      ],
    },
    { heading: "Managing Cookies", paragraphs: ["Most web browsers allow you to control cookies through browser settings. You can choose to block or delete cookies. However, disabling cookies may affect some website functionality."] },
    { heading: "Updates to This Cookie Policy", paragraphs: ["We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date."] },
  ],
  contact: { heading: "Contact", intro: "For questions about this policy, contact:", ...STANDARD_CONTACT_LINES },
};
