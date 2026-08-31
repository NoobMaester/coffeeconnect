import ServiceHero from "../../components/services/ServiceHero";
import ServiceIntro from "../../components/services/ServiceIntro";
import ServicePillars from "../../components/services/ServicePillars";
import ServiceStats from "../../components/services/ServiceStats";
import ServiceCTA from "../../components/services/ServiceCTA";

export default function RoastingValueAdditionPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="What We Do"
        title="Roasting & Value Addition"
        description="We transform coffee locally through roasting and value addition, creating finished products that connect quality coffee with new opportunities."
        image="/coffee-roasting.jpg"
      />

      <ServiceIntro
        title="From green coffee to something people can enjoy."
        description="Roasting is where the character of coffee begins to come forward. Our value-addition work focuses on transforming coffee into finished products while creating opportunities to keep more value within the local coffee ecosystem."
      />

      <ServicePillars
        title="Coffee, transformed with purpose."
        description="Our approach brings together roasting, product preparation and local value addition."
        items={[
          {
            number: "01",
            title: "Roasting",
            description:
              "Roasting coffee to bring out its distinct character and create finished products ready for the market.",
          },
          {
            number: "02",
            title: "Whole Beans",
            description:
              "Offering roasted coffee in whole-bean format for customers who prefer to grind their coffee fresh.",
          },
          {
            number: "03",
            title: "Ground Coffee",
            description:
              "Preparing roasted coffee in ground format for convenient brewing and everyday use.",
          },
          {
            number: "04",
            title: "Local Value Addition",
            description:
              "Transforming coffee locally creates opportunities to move beyond raw production and capture more value within Rwanda.",
          },
        ]}
      />

      <ServiceStats
        title="Roasting for different coffee preferences."
        stats={[
          {
            value: "3",
            label: "Roast profiles",
          },
          {
            value: "2",
            label: "Product formats",
          },
          {
            value: "100%",
            label: "Locally roasted",
          },
        ]}
      />

      <ServiceCTA
        title="Let's create more value from coffee."
        description="Interested in our coffee, value-addition work or opportunities to collaborate? We'd love to hear from you."
      />
    </main>
  );
}