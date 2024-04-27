import { images, checkBoxData, confirm } from "../data/drowsinessDizzinessData";
import Rectangle_768 from "../assets/img/Rectangle_768.png";
import { textData } from "../data/textData";

const DrowsinessDizzinessComponent = () => {
  const spiels = textData.find((data) => data.id === "drowsiness-dizziness");
  return (
    <>
      <div className="high-risk-border">
        <div className="flex-two-column-row">
          <img src={Rectangle_768} alt="Rectangle_750" />
          <span className="muted-text">{spiels?.title}</span>
        </div>
      </div>
      <div className="list-img">
        {images.map((image, index) => (
          <div className="hazard-symbols" key={index}>
            <img src={image.src} alt={image.alt} />
            <p className="muted-text">{image.description}</p>
          </div>
        ))}
      </div>
      <div className="checkbox-section">
        <div className="flex items-center mb-5">
          <label
            htmlFor="dizziness-disabled-checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
          >
            {confirm.map((item, index) => (
              <div className="hazard-symbols" key={index}>
                <p className="text-confirm text-lg">{item.label}</p>
              </div>
            ))}
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="dizziness-disabled-checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="dizziness-disabled-checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
          >
            {checkBoxData.map((item, index) => (
              <div className="hazard-symbols" key={index}>
                <p className="muted-text">{item.label}</p>
              </div>
            ))}
          </label>
        </div>
      </div>
    </>
  );
};

export default DrowsinessDizzinessComponent;
