import React from "react";
import { ReactComponent as Girl } from '../images/girl.svg';
import { ReactComponent as PlayButton } from '../images/playbutton.svg';

const HeadingSection = () => {
  return (
    <section className="headimg-section">
      <div className="heading-content">
        <div className="heading-text">
          <p className="headLine1"> BEST DESTINATIONS AROUND THE WORLD</p>
          <h1 className="headLine2">Travel, enjoy and live a new and full life</h1>
          <p className="headLine3">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
         <div className="button-heading">
         <button className="btn heading-btn">Find Out More</button> 
         <div style={{marginTop:"25px"}}><PlayButton/></div>
          <p className="playButton" >Play Demo</p>


         </div>
        </div>
        <div className="heading-image">
          <Girl/>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
