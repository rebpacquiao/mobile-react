import { useState } from "react";
import listings from "../data/riskAssesorListing";
import Listing from "../components/riskAssesor";

function SwitchComponent() {
  const [active, setActive] = useState("Risk assessor");

  const handleClick = (role: string) => {
    setActive(role);
  };

  return (
    <>
      <span className="muted-text">
        <p>
          View a list of recommended training courses tailored to the hazards
          and controls above by identifying whether you are a Risk Assessor or
          Task Operator.
        </p>
      </span>
      <div className="switch-container">
        <div className="switch-toggle">
          <button
            onClick={() => handleClick("Risk assessor")}
            className={active === "Risk assessor" ? "active" : ""}
          >
            Risk assessor
          </button>
          <button
            onClick={() => handleClick("Task operator")}
            className={active === "Task operator" ? "active" : ""}
          >
            Task operator
          </button>
        </div>
        <div className="mt-6">
          {active === "Risk assessor" ? (
            <>
              <div>
                {listings.map((listing, index) => (
                  <Listing key={index} {...listing} />
                ))}
              </div>
              <div className="flex items-center">
                <input
                  id="switch-disabled-checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="switch-disabled-checked-checkbox"
                  className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  By ticking this box, I confirm that I have been trained to
                  assess the risks involving the use of chemicals and hazardous
                  substances through a separate course provider or one of the
                  courses above.
                </label>
              </div>
            </>
          ) : (
            <p>Coming Soon...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SwitchComponent;
