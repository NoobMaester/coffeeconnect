import ServiceHero from "../../components/services/ServiceHero";
import ServiceIntro from "../../components/services/ServiceIntro";
import ServicePillars from "../../components/services/ServicePillars";
import ServiceStats from "../../components/services/ServiceStats";
import ServiceCTA from "../../components/services/ServiceCTA";

export default function FarmersCooperativesPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="What We Do"
        title="Growing Better Coffee Together"
        description="We work with farmers and cooperatives to strengthen coffee production, quality, skills and access to opportunities across the coffee value chain."
        image="/coffee-farmers.jpg"
      />

      <ServiceIntro
        title="Stronger farmers build a stronger coffee ecosystem."
        description="Our work with farmers and cooperatives focuses on practical knowledge and skills that can support better coffee production, improved quality and stronger connections to markets."
      />

      <ServicePillars
        title="Four ways we support farmers."
        description="We bring together the knowledge, quality practices and connections farmers need to participate more strongly in the coffee value chain."
        items={[
          {
            number: "01",
            title: "Training",
            description:
              "Building knowledge around good agricultural practices, climate-smart production and organic farming.",
          },
          {
            number: "02",
            title: "Quality",
            description:
              "Supporting better processing, sorting, grading and quality improvement practices.",
          },
          {
            number: "03",
            title: "Markets",
            description:
              "Connecting producers with buyers and opportunities for value addition.",
          },
          {
            number: "04",
            title: "Skills",
            description:
              "Strengthening practical skills and capacity among farmers and cooperatives.",
          },
        ]}
      />

      <ServiceStats
        title="Building capacity across the coffee community."
        stats={[
          {
            value: "3,000+",
            label: "Farmers supported",
          },
        ]}
      />

      <ServiceCTA
        title="Let's grow better coffee together."
        description="Whether you are a farmer, cooperative, buyer or organisation looking to collaborate, get in touch with Coffee Connect Centre."
      />
    </main>
  );
}