export interface BuildData {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroHeading: string;
  heroSubheading: string;
  overview: string;
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const buildData: BuildData[] = [
  {
    slug: "a-business-app",
    title: "Build a Business App",
    seoTitle: "Build a Business App | Custom App Development | Tecnobij Solutions",
    seoDescription: "Learn how to build a custom business application. Requirements, costs, timelines, and the complete development process.",
    heroHeading: "Build a Business App",
    heroSubheading: "Turn your operational bottlenecks into a streamlined mobile or web application.",
    overview: "Building a business app is different from building a consumer app. It requires deep integration with your existing workflows, strict security, and a focus on efficiency. Whether you need an internal tool for your employees or a portal for your clients, we handle the entire process.",
    features: [
      {
        title: "Requirements Gathering",
        description: "We don't just ask what you want; we ask what business problem you're trying to solve."
      },
      {
        title: "Architecture & Security",
        description: "Designing the database and API structure to handle sensitive business data securely."
      },
      {
        title: "Deployment & Training",
        description: "We don't just hand over the code; we ensure your team knows how to use the new system."
      }
    ],
    faqs: [
      {
        question: "How much does it cost to build a business app?",
        answer: "Costs vary wildly based on complexity, ranging from $5,000 for a simple internal tool to $50,000+ for enterprise systems. We provide accurate quotes after the initial scoping phase."
      },
      {
        question: "Should I build a web app or a mobile app?",
        answer: "If your users are constantly on the move (e.g., field sales), mobile is better. For heavy data entry or office work, a web app is usually superior."
      }
    ]
  },
  {
    slug: "an-erp",
    title: "Build an ERP",
    seoTitle: "Build a Custom ERP System | Architecture & Process | Tecnobij",
    seoDescription: "A complete guide to building a custom ERP system for your business. Replace off-the-shelf software with a bespoke core system.",
    heroHeading: "Build a Custom ERP",
    heroSubheading: "A central nervous system designed specifically for your organization.",
    overview: "Off-the-shelf ERPs like SAP or Oracle are powerful but incredibly rigid. Building a custom ERP allows you to encode your unique competitive advantages directly into your software. We build modular ERP systems that grow with your business without punishing you with per-user licensing fees.",
    features: [
      {
        title: "Modular Development",
        description: "Start with the most critical modules (e.g., Inventory) and expand later."
      },
      {
        title: "Legacy Data Migration",
        description: "We safely migrate your existing data from Excel or older systems."
      },
      {
        title: "Custom Reporting",
        description: "Dashboards that show the metrics you actually care about."
      }
    ],
    faqs: [
      {
        question: "How long does it take to build an ERP?",
        answer: "A fully custom ERP is a major project, usually taking 3 to 9 months depending on the number of modules and integrations."
      },
      {
        question: "Can we build it in phases?",
        answer: "Yes, this is our recommended approach. We build the core system first, then add modules like HR, CRM, or Finance iteratively."
      }
    ]
  }
];

export function getBuildBySlug(slug: string): BuildData | undefined {
  return buildData.find(b => b.slug === slug);
}
