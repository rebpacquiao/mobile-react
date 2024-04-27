import { ListingProps } from "../models/ListingModel";

function Listing({ title, description, thumbnail }: ListingProps) {
  return (
    <div className="list-container flex flex-col sm:flex-row">
      <img src={thumbnail} alt={title} className="mr-4" />
      <div className="listing-content">
        <h2 className="font-bold mb-3 sm:mt-3 sm:mb-3">{title}</h2>
        <p className="mt-0 sm:mt-2">{description}</p>
        <button className="enroll-btn">ENROLL FOR FREE</button>
      </div>
    </div>
  );
}

export default Listing;
