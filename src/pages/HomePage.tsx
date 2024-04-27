import AccordionItem from "../components/Accordion";
import OwnerInformation from "../components/OwnerInformation";
import SwitchComponent from "../components/switchComponent";
import ConfirmationComponent from "../components/confirmationComponent";
import DataSubstanceInformation from "../components/DataSubstanceInformation";
import ExtremelyFlammableAerosol from "../components/ExtremelyFlammableAerosol";
import PressurizedContainerComponent from "../components/PressuredContainer";
import DrowsinessDizzinessComponent from "../components/DrowsinessDizziness";
import SkinIrritationComponent from "../components/skinIrritationComponent";
import SkinReactionComponent from "../components/SkinReactionComponent";
import AquaticLifeComponent from "../components/AquaticLifeComponent";
import "../App.scss";

function HomePage() {
  const accordionSubstance = [
    {
      heading: "Rating Before Controls: <strong>MEDIUM RISK</strong>",
      background: "medium-risk",
      content: () => <DataSubstanceInformation />,
    },
  ];

  const accordionItems = [
    {
      heading: "Rating Before Controls: <strong>HIGH RISK</strong>",
      background: "high-risk",
      content: () => <ExtremelyFlammableAerosol />,
    },
    {
      heading: "Rating Before Controls: <strong>HIGH RISK</strong>",
      background: "high-risk",
      content: () => <PressurizedContainerComponent />,
    },
    {
      heading: "Rating Before Controls: <strong>HIGH RISK</strong>",
      background: "medium-risk",
      content: () => <DrowsinessDizzinessComponent />,
    },
    {
      heading: "Rating Before Controls: <strong>LOW RISK</strong>",
      background: "low-risk",
      content: () => <SkinIrritationComponent />,
    },
    {
      heading: "Rating Before Controls: <strong>LOW RISK</strong>",
      background: "low-risk",
      content: () => <SkinReactionComponent />,
    },
    {
      heading: "Rating Before Controls: <strong>LOW RISK</strong>",
      background: "low-risk",
      content: () => <AquaticLifeComponent />,
    },
    {
      heading:
        "Training Recommendations from <strong>The Knights of Safety Academy</strong>",
      background: "medium-risk",
      content: () => <SwitchComponent />,
    },
    {
      heading: "Confirmation",
      background: "confirmation",
      content: () => <ConfirmationComponent />,
    },
  ];

  return (
    <>
      <div className="app-container">
        {accordionSubstance.map((item, index) => (
          <div
            key={index}
            className={`${index !== 0 ? "mt-6" : ""} substance-section`}
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <AccordionItem
              heading={item.heading}
              background={item.background}
              content={
                <>
                  <div className="accordion-desk">{item.content()}</div>
                </>
              }
            />
          </div>
        ))}
        <OwnerInformation />
        <h5 className="mt-6 mb-2 text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          REGULATORY STATEMENTS & CONTROLS
        </h5>

        {accordionItems.map((item, index) => (
          <div
            key={index}
            className={`${index !== 0 ? "mt-6" : ""} substance-section`}
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <AccordionItem
              heading={item.heading}
              background={item.background}
              content={
                <>
                  <div className="accordion-desk">{item.content()}</div>
                </>
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
