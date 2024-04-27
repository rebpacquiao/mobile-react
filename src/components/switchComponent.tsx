import { useState } from "react";
import listings from "../data/riskAssesorListing";
import Listing from "../components/riskAssesor";
import TaskOperator from "./TaskOperator";
import { textData } from "../data/textData";

function SwitchComponent() {
  const spiels = textData.find((data) => data.id === "trainig-recommendations");
  const [active, setActive] = useState("Risk assessor");

  const handleClick = (role: string) => {
    setActive(role);
  };

  return (
    <>
      <span className="muted-text">
        <p>{spiels?.content}</p>
      </span>
      <div className="switch-container">
        <div className="switch-toggle">
          <button
            onClick={() => handleClick("Risk assessor")}
            className={active === spiels?.riskAssessor ? "active" : ""}
          >
            {spiels?.riskAssessor}
          </button>
          <button
            onClick={() => handleClick("Task operator")}
            className={active === spiels?.taskOperator ? "active" : ""}
          >
            {spiels?.taskOperator}
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
                  {spiels?.confirm}
                </label>
              </div>
            </>
          ) : (
            <TaskOperator />
          )}
        </div>
      </div>
    </>
  );
}

export default SwitchComponent;
