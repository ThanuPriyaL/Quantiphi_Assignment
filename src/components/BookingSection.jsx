import React from "react";
import { ReactComponent as BookingImg }from "../images/bookingImg.svg";
import { ReactComponent as Payment }from "../images/makePaymentIcon.svg";
import { ReactComponent as Destination} from "../images/chooseDestinationIcon.svg";
import { ReactComponent as Travel  }from "../images/travel.svg";

const BookingSection = () => {
  const steps = [
    {
      title: "Choose Destination",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
      icon: Destination,
    },
    {
      title: "Make Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
      icon: Payment,
    },
    {
      title: "Reach Airport on Selected Date",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
      icon: Travel,
    },
  ];

  return (
    <section id="booking" className="booking-section">
      <div className="booking-two-columns">
      <div className="booking-steps">
      <p className="category">Easy and Fast</p>
      <h2 className="categoryHeadLine">Book Your Next Trip In 3 Easy Steps</h2>
        {steps.map((step, index) => (
          <div key={index} className="booking-step">
           <step.icon className="step-icon"/>
          <div className="booking-details">
          <h3 className="booking-title">{step.title}</h3>
          <p className="booking-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <BookingImg className="booking-Img"/>
      </div>
      </div>
    </section>
  );
};

export default BookingSection;
