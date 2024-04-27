import { useState } from "react";
import AccordionItemProps from "../models/AccordionItem";

const AccordionItem: React.FC<AccordionItemProps> = ({
  heading,
  content,
  background,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={background}>
      <h2>
        <button
          type="button"
          onClick={toggleAccordion}
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500"
          aria-expanded={isOpen}
        >
          <span dangerouslySetInnerHTML={{ __html: heading }}></span>
          <svg
            className={`w-3 h-3 ${isOpen ? "rotate-180" : "rotate-0"} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div className={`${isOpen ? "" : "hidden"}`}>
        <div className="p-2">
          <div className="bg-white accordion-content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
