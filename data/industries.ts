export interface IndustryData {
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

export const industriesData: IndustryData[] = [
  {
    slug: "agriculture",
    title: "Agriculture",
    seoTitle: "Agriculture & Agritech Software Development | Tecnobij Solutions",
    seoDescription: "Custom agritech software development for farm management, supply chain, and agricultural operations.",
    heroHeading: "Agriculture Technology Solutions",
    heroSubheading: "Software built to modernize farming and agricultural supply chains.",
    overview: "From farm management software to supply chain logistics, we build technology that helps agribusinesses track inventory, manage field operations, and optimize yield through data-driven insights.",
    features: [
      {
        title: "Farm Management Systems",
        description: "Track resources, crop cycles, and equipment maintenance in one place."
      },
      {
        title: "Supply Chain Tracking",
        description: "Monitor produce from the farm to the distributor with real-time updates."
      },
      {
        title: "Field Worker Apps",
        description: "Mobile applications for on-ground staff to report data offline or online."
      }
    ],
    faqs: [
      {
        question: "Can the apps work offline?",
        answer: "Yes, we can build mobile apps with offline-first capabilities for areas with poor connectivity."
      },
      {
        question: "Do you build custom farm ERPs?",
        answer: "Yes, we specialize in building bespoke ERP systems tailored specifically for agricultural operations."
      }
    ]
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    seoTitle: "Manufacturing Software & ERP Development | Tecnobij Solutions",
    seoDescription: "Custom software and ERP systems for the manufacturing industry. Optimize production, inventory, and supply chain.",
    heroHeading: "Manufacturing Software Solutions",
    heroSubheading: "Digitize your production floor and streamline inventory.",
    overview: "Manufacturing requires precision. We build custom ERPs, inventory management systems, and production tracking software that eliminates bottlenecks and provides real-time visibility into your factory floor.",
    features: [
      {
        title: "Production Tracking",
        description: "Monitor work-in-progress (WIP) and machine downtime in real time."
      },
      {
        title: "Inventory & Procurement",
        description: "Automate reordering processes and track raw materials accurately."
      },
      {
        title: "Quality Control Systems",
        description: "Digital checklists and automated reporting for QC compliance."
      }
    ],
    faqs: [
      {
        question: "Can you integrate with our existing machinery?",
        answer: "Depending on the machinery's API or data output capabilities (IoT), we can build integrations to capture real-time machine data."
      },
      {
        question: "How is this different from Tally or SAP?",
        answer: "Our solutions are custom-built to match your exact production workflows, avoiding the rigid constraints and high licensing fees of traditional software."
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find(i => i.slug === slug);
}
