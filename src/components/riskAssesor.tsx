import { ListingProps } from "../models/ListingModel";

function Listing({ title, description, thumbnail }: ListingProps) {
  return (
    <div className="list-container flex flex-col sm:flex-row">
      <img src={thumbnail} alt={title} className="mr-4" />
      <div className="listing-content">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
        <button className="enroll-btn">ENROLL FOR FREE</button>
      </div>
    </div>
  );
}

export default Listing;
