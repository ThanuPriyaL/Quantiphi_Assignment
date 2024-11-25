import React from "react";
import { ReactComponent as Background }from "../images/servicesBackgroung.svg";
import { ReactComponent as WeatherIcon }from "../images/weather.svg";
import { ReactComponent as FlightsIcon} from "../images/flights.svg";
import { ReactComponent as EventsIcon }from "../images/events.svg";
import { ReactComponent as CustomizationIcon} from "../images/customization.svg";

const ServicesSection = () => {
  const services = [
    { 
      title: "Calculated Weather", 
      description: "Built Wicket longer admire do barton vanity itself do in it.", 
      image: WeatherIcon 
    },
    { 
      title: "Best Flights", 
      description: "Engrossed listening. Park gate sell they west hard for the.", 
      image: FlightsIcon 
    },
    { 
      title: "Local Events", 
      description: "Barton vanity itself do in it. Preferred to men engrossed listening.", 
      image: EventsIcon 
    },
    { 
      title: "Customization", 
      description: "We deliver outsourced aviation services for military customers.", 
      image: CustomizationIcon 
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-two-columns">
        <div className="text-column">
          <p className="category">CATEGORY</p>
        <h2 className="categoryHeadLine">We Offer Best Services</h2>
        </div>
        <div className="image-column">
          <Background />
        </div>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <service.image className="service-image" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
