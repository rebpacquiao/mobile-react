import { data, images, checkBoxData } from "../data/substanceData";
import { textData } from "../data/textData";

const DataSubstanceInformation = () => {
  const spiels = textData.find((data) => data.id === "substance-information");
  return (
    <>
      <h5 className="uppercase">
        <strong>{spiels?.title}</strong>
      </h5>
      <ul className="data-list">
        {data.map((item, index) => (
          <li key={index} className="data-item">
            <strong className="mr-2">{item.title}:</strong>
            <span className="muted-text">{item.value}</span>
          </li>
        ))}
      </ul>

      <h5 className="mt-3 uppercase">
        <strong>{spiels?.hazardSymbols}</strong>
      </h5>
      <div className="list-img">
        {images.map((image, index) => (
          <div className="hazard-symbols" key={index}>
            <img src={image.src} alt={image.alt} />
            <p className="muted-text">{image.description}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center checkbox-section">
        <input
          id="disabled-checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="disabled-checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
        >
          {checkBoxData.map((item, index) => (
            <div className="hazard-symbols" key={index}>
              <p className="muted-text">{item.label}</p>
            </div>
          ))}
        </label>
      </div>
      <div className="flex flex-col sm:flex-row">
        <button className="mb-2 uppercase sm:mb-0 sm:mr-2 bg-mediumRisk hover:bg-mediumRisk text-dark font-bold py-2 px-4 rounded-full">
          {spiels?.dataSheet}
        </button>
        <button className="bg-mediumRisk uppercase hover:bg-mediumRisk text-dark font-bold py-2 px-4 rounded-full">
          {spiels?.assessmentPDF}
        </button>
      </div>
    </>
  );
};

export default DataSubstanceInformation;
