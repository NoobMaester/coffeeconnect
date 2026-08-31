import ServiceHero from "../../components/services/ServiceHero";
import ServiceIntro from "../../components/services/ServiceIntro";
import CircularFlow from "../../components/services/CircularFlow";
import ServicePillars from "../../components/services/ServicePillars";
import ServiceCTA from "../../components/services/ServiceCTA";

export default function CircularEconomyPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="What We Do"
        title="Circular Economy & Innovation"
        description="We explore ways to turn coffee residues into useful products while creating new opportunities for skills, income and employment."
        image="/circular-economy.png"
      />

      <ServiceIntro
        title="Turning what is left behind into something useful."
        description="Coffee processing creates residues that can be treated as waste or seen as an opportunity. Our circular economy work explores how these materials can be transformed into practical products and new possibilities."
      />

      <CircularFlow />

      <ServicePillars
        title="From coffee residues to new possibilities."
        description="Our circular approach explores different applications for coffee residues and connects environmental thinking with practical opportunity."
        items={[
          {
            number: "01",
            title: "Coffee Scrubs",
            description:
              "Exploring coffee residues as an ingredient for useful personal-care products.",
          },
          {
            number: "02",
            title: "Soap Products",
            description:
              "Developing applications such as liquid and bar soap from coffee-related residues.",
          },
          {
            number: "03",
            title: "Hand-Wash Products",
            description:
              "Creating new applications that give coffee residues another useful purpose.",
          },
          {
            number: "04",
            title: "Compost",
            description:
              "Exploring ways coffee residues can return to the production cycle as a useful resource.",
          },
        ]}
      />

      <ServiceCTA
        title="Let's turn waste into opportunity."
        description="We welcome collaboration around circular solutions, innovation, climate programmes and new opportunities within the coffee ecosystem."
      />
    </main>
  );
}