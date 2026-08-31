import ServiceHero from "../../components/services/ServiceHero";
import ServiceIntro from "../../components/services/ServiceIntro";
import ServicePillars from "../../components/services/ServicePillars";
import ServiceStats from "../../components/services/ServiceStats";
import ServiceCTA from "../../components/services/ServiceCTA";

export default function CoffeeProductionPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="What We Do"
        title="Organic & Climate-Smart Coffee Production"
        description="We promote sustainable coffee production through organic and climate-smart practices that support healthier farms and improved productivity."
        image="/coffee-farm.jpg"
      />

      <ServiceIntro
        title="Growing coffee with the future in mind."
        description="Coffee Connect Centre manages 1,176+ coffee trees while promoting practical approaches to sustainable coffee production. Our work focuses on strengthening farm productivity while encouraging responsible practices that can support coffee farming for the future."
      />

      <ServicePillars
        title="A practical approach to better coffee farming."
        description="Our production work brings together practical farm management and climate-smart approaches."
        items={[
          {
            number: "01",
            title: "Soil Management",
            description:
              "Supporting practices that maintain healthy soils and create better conditions for productive coffee farms.",
          },
          {
            number: "02",
            title: "Sustainable Harvesting",
            description:
              "Promoting responsible harvesting practices that support coffee quality and the long-term productivity of farms.",
          },
          {
            number: "03",
            title: "Pest Management",
            description:
              "Encouraging practical approaches to managing pests while supporting sustainable coffee production.",
          },
          {
            number: "04",
            title: "Farm Productivity",
            description:
              "Working toward improved farm productivity through better practices, skills and climate-smart approaches.",
          },
        ]}
      />

      <ServiceStats
        title="Growing our coffee footprint."
        stats={[
          {
            value: "1,176+",
            label: "Coffee trees managed",
          },
          {
            value: "10,000+",
            label: "Tree target by 2030",
          },
        ]}
      />

      <ServiceCTA
        title="Better farming creates better opportunities."
        description="Explore how Coffee Connect Centre connects production, skills, value addition and markets across the coffee ecosystem."
      />
    </main>
  );
}