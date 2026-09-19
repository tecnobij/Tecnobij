export interface SolutionData {
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

export const solutionsData: SolutionData[] = [
  {
    slug: "website-development",
    title: "Website Development",
    seoTitle: "Custom Website Development Company | Tecnobij Solutions",
    seoDescription: "Professional custom website development company building high-performance, scalable, and responsive business websites.",
    heroHeading: "Bespoke Website Development",
    heroSubheading: "We build fast, secure, and fully customized websites tailored to your business goals.",
    overview: "A business website isn't just a digital brochure; it's a core asset for growth. We build high-performance websites that look exceptional and function flawlessly, ensuring you capture every opportunity.",
    features: [
      {
        title: "Custom Design",
        description: "Tailored aesthetics that align perfectly with your brand identity."
      },
      {
        title: "High Performance",
        description: "Optimized for speed and technical SEO to rank higher on Google."
      },
      {
        title: "Scalable Architecture",
        description: "Built on modern frameworks like Next.js that grow with your traffic."
      }
    ],
    faqs: [
      {
        question: "How long does a custom website take to build?",
        answer: "Typically 4-8 weeks depending on the complexity, design requirements, and integrations."
      },
      {
        question: "Do you use templates?",
        answer: "No, all our websites are bespoke and designed around your specific business requirements."
      }
    ]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    seoTitle: "Custom Mobile App Development Company | Tecnobij Solutions",
    seoDescription: "Expert mobile app development company for Android and iOS. We build bespoke mobile applications for businesses.",
    heroHeading: "Custom Mobile App Development",
    heroSubheading: "Transform your business with high-quality iOS and Android applications.",
    overview: "Whether you need a customer-facing application or an internal tool for your employees, we build mobile apps that deliver seamless experiences across all devices.",
    features: [
      {
        title: "Cross-Platform Capability",
        description: "Build once, deploy everywhere with modern frameworks."
      },
      {
        title: "Native Performance",
        description: "Smooth, responsive interactions that feel entirely natural to the user."
      },
      {
        title: "Secure Data Handling",
        description: "Enterprise-grade security for user data and business logic."
      }
    ],
    faqs: [
      {
        question: "Do you develop for both iOS and Android?",
        answer: "Yes, we build apps that work seamlessly across both major mobile platforms."
      },
      {
        question: "Can my app integrate with my existing backend?",
        answer: "Absolutely. We specialize in API integrations and system synchronization."
      }
    ]
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    seoTitle: "Bespoke Custom Software Development Company | Tecnobij Solutions",
    seoDescription: "Bespoke custom software development services. We build custom business software, workflow tools, and enterprise systems.",
    heroHeading: "Custom Software Development",
    heroSubheading: "Software built exactly for how your business works.",
    overview: "Off-the-shelf software often forces you to change your workflow. We build custom software that adapts to your unique processes, saving time and eliminating manual work.",
    features: [
      {
        title: "Workflow Automation",
        description: "Eliminate repetitive tasks and streamline operations."
      },
      {
        title: "Seamless Integrations",
        description: "Connect your new software with the tools you already use."
      },
      {
        title: "Uncompromising Security",
        description: "Your business data is protected by industry-standard encryption."
      }
    ],
    faqs: [
      {
        question: "Why choose custom software over off-the-shelf?",
        answer: "Custom software is designed for your exact workflow, meaning no bloated features and complete ownership of your data."
      },
      {
        question: "Will I own the source code?",
        answer: "Yes, upon project completion and final payment, you own the intellectual property."
      }
    ]
  }
];

export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutionsData.find(s => s.slug === slug);
}
