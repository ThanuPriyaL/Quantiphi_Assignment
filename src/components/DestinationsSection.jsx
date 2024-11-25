import React from "react";
import { ReactComponent as Rome } from "../images/rome_Italy.svg";
import { ReactComponent as London } from "../images/london_Uk.svg";
import { ReactComponent as Europe } from "../images/full_Europe.svg";

const DestinationsSection = () => {
  const destinations = [
    { image: Rome },
    { image: London },
    { image: Europe },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-two-columns">
        <div className="text-column">
          <p className="category">Top Selling</p>
          <h2 className="categoryHeadLine">Top Destinations</h2>
        </div>
      </div>

      <div className="category-container">
        {destinations.map((destination, index) => (
          <div key={index} className={index === 2 ? 'third-card' : ''}>
            <destination.image className="destination-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
