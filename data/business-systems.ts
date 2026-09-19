export interface BusinessSystemData {
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

export const businessSystemsData: BusinessSystemData[] = [
  {
    slug: "erp",
    title: "ERP Systems",
    seoTitle: "Custom ERP Development Company | Business Core Systems | Tecnobij",
    seoDescription: "Bespoke ERP development services. We build custom Enterprise Resource Planning systems tailored exactly to your business operations.",
    heroHeading: "Custom ERP Development",
    heroSubheading: "An Enterprise Resource Planning system built exactly for your workflow.",
    overview: "Most businesses outgrow off-the-shelf ERP systems because they force you into rigid processes. We build custom ERP solutions that map precisely to how you run your business, integrating finance, HR, inventory, and operations into one single source of truth.",
    features: [
      {
        title: "Centralized Data",
        description: "Eliminate data silos. Connect all your departments in one unified dashboard."
      },
      {
        title: "Workflow Mapping",
        description: "Your ERP is built around your specific operational workflows, not the other way around."
      },
      {
        title: "Real-time Reporting",
        description: "Generate insights instantly with automated, customizable reports."
      }
    ],
    faqs: [
      {
        question: "Is custom ERP better than an off-the-shelf solution?",
        answer: "If your business has unique operational processes, a custom ERP eliminates the need for workarounds and expensive per-user licensing fees."
      },
      {
        question: "Can it integrate with our existing accounting software?",
        answer: "Yes, we can build API integrations to sync data with tools like Tally, QuickBooks, or Xero."
      }
    ]
  },
  {
    slug: "crm",
    title: "CRM Systems",
    seoTitle: "Custom CRM Development Company | Tecnobij Solutions",
    seoDescription: "Build a custom CRM system to manage your sales pipeline, customer relationships, and follow-ups efficiently without per-user licensing fees.",
    heroHeading: "Custom CRM Development",
    heroSubheading: "Manage customer relationships without the bloat.",
    overview: "A Customer Relationship Management (CRM) system should help your sales team close more deals, not create administrative overhead. We build lightweight, highly-effective custom CRMs that track leads, automate follow-ups, and provide crystal-clear sales pipelines.",
    features: [
      {
        title: "Pipeline Management",
        description: "Visualize your sales process from lead generation to closed deals."
      },
      {
        title: "Automated Follow-ups",
        description: "Trigger emails, WhatsApp messages, or SMS notifications based on customer actions."
      },
      {
        title: "No Per-User Fees",
        description: "Unlike SaaS CRMs, you own the software. Scale your team without scaling your costs."
      }
    ],
    faqs: [
      {
        question: "Can we integrate WhatsApp Business API?",
        answer: "Yes, we can integrate WhatsApp directly into the CRM for automated and manual customer communication."
      },
      {
        question: "Is the CRM mobile friendly?",
        answer: "Absolutely. We ensure your sales team can access the CRM seamlessly on their mobile devices while in the field."
      }
    ]
  }
];

export function getBusinessSystemBySlug(slug: string): BusinessSystemData | undefined {
  return businessSystemsData.find(s => s.slug === slug);
}
