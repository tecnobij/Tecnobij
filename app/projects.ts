export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  theme: "orange" | "blue" | "purple" | "green" | "navy" | "gold";
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "yashagro",
    title: "YashAgro",
    category: "Agriculture & AgriTech",
    shortDescription: "An integrated agriculture platform for fruits, raisins, processing, packaging, and farmer-focused solutions.",
    description: "YashAgro is an integrated platform focused on fruits, raisins, and a wide range of agricultural products and services. The organization works closely with farmers and supports primary processing, agricultural products, packaging solutions, and quality analysis.",
    features: ["Agricultural products", "Primary processing", "Packaging solutions", "Quality analysis"],
    theme: "green",
    image: "/yashagro.png",
    imageAlt: "YashAgro agricultural products and services logo",
  },
  {
    slug: "okakit",
    title: "Okakit",
    category: "Business Management / SaaS",
    shortDescription: "A centralized companion platform for small businesses to manage leads, invoices, WhatsApp communication, auto-responders, and bookings.",
    description: "Okakit is a centralized companion app for small businesses. It helps teams log call leads, distribute professional invoices via WhatsApp, configure custom auto-responders, and launch a dynamic booking website.",
    features: ["Call lead logging", "Professional invoices", "WhatsApp invoice sharing", "Custom auto-responders", "Online booking website"],
    theme: "blue",
    image: "/okakit.png",
    imageAlt: "Okakit business management app logo",
  },
  {
    slug: "ardcore-health-card",
    title: "Ardcore Health Card",
    category: "Healthcare",
    shortDescription: "A digital healthcare card solution providing cardholders with discount benefits at participating hospitals.",
    description: "Ardcore Health Card is a healthcare-focused solution designed to provide cardholders with access to discounts at participating hospitals and healthcare facilities.",
    features: ["Health card", "Patient benefits", "Hospital discounts", "Healthcare accessibility"],
    theme: "purple",
    image: "/Ardcore.png",
    imageAlt: "Ardcore Health Card healthcare solution logo",
  },
  {
    slug: "sar-chem-tech-solution",
    title: "SAR Chem-Tech Solution",
    category: "Industrial Engineering",
    shortDescription: "A professional digital platform for an engineering company serving chemical and allied industries.",
    description: "SAR Chem-Tech Solution, founded in 2018 in Pune, provides reliable and cost-effective engineering solutions in Heat and Mass Transfer / Separation Operations for chemical and allied industries.",
    features: ["Heat and Mass Transfer", "Separation Operations", "Chemical & allied industries", "Safety and energy", "Automation"],
    theme: "navy",
    image: "/sar_process.png",
    imageAlt: "SAR Chem-Tech industrial engineering solutions logo",
  },
  {
    slug: "arihant-construction",
    title: "Arihant Construction",
    category: "Construction & Solar",
    shortDescription: "A professional business website presenting construction services together with solar and renewable-energy offerings.",
    description: "Arihant Construction is a business website project focused on presenting construction services together with solar and renewable-energy offerings.",
    features: ["Construction", "Solar solutions", "Renewable energy", "Business enquiries", "Service presentation"],
    theme: "gold",
    image: "/Arihant_construction.png",
    imageAlt: "Arihant Construction solar and construction logo",
  },
  {
    slug: "genius-gateways",
    title: "Genius Gateways",
    category: "Education / Study Abroad",
    shortDescription: "A digital platform for students seeking university admissions, career counselling, scholarships, and overseas education guidance.",
    description: "Genius Gateways Study Abroad Consultants helps students pursue international education through university admissions, career counselling, scholarships, and educational planning.",
    features: ["University admissions", "Career counselling", "Scholarship guidance", "Educational planning", "Study abroad consultation"],
    theme: "orange",
    image: "/genius_gateway.png",
    imageAlt: "Genius Gateways study abroad consultants logo",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
