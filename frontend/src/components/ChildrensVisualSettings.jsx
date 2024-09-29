import { useState } from "react";
import Button from 'muicss/lib/react/button';

export default function ChildrensVisualSettings(props) {
  const CC_DESIGN_MAIN = "https://i.ibb.co/bRxw8RD/kids-1.png";

  const [cardBackground, setCardBackground] = useState(CC_DESIGN_MAIN);
  
  const CC_DESIGN_2 = "https://i.ibb.co/BVLD4x7/cc-design2.png";
  const CC_DESIGN_3 = "https://i.ibb.co/9HZTs4B/cc-design3.png";
  const CC_DESIGN_4 = "https://i.ibb.co/16G1vHQ/cc-design4.png";
  const CC_DESIGN_5 = "https://i.ibb.co/8DrWzNB/cc-design5.png";
  const CC_DESIGN_6 = "https://i.ibb.co/tD9LbWb/cc-design6.png";


  const ccDesignTwo = function () {
    setCardBackground(CC_DESIGN_2);
  };
  const ccDesignThree = function () {
    setCardBackground(CC_DESIGN_3);
  };
  const ccDesignFour = function () {
    setCardBackground(CC_DESIGN_4);
  };
  const ccDesignFive = function () {
    setCardBackground(CC_DESIGN_5);
  };
  const ccDesignSix = function () {
    setCardBackground(CC_DESIGN_6);
  };
  const ccMainDesign = function () {
    setCardBackground(CC_DESIGN_MAIN);
  };

  return (
    <main className="container">
      <div className="select-card">
        <div className="gallery-item">
        <p className="heading">Select your card design </p>
          <img className="cc-main-design-top" src={cardBackground} />
        </div>
      </div> 
      
      <div className="frame-card-selection">
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css"
        />
          {/* <div class="gallery-item">
            <img className="cc-main-design" src={cardBackground} />
          </div> */}
          <div class="gallery-item">
            <img onClick={ccMainDesign} className="cc-design1" src={CC_DESIGN_MAIN} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignTwo}  className="cc-design2" src={CC_DESIGN_2} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignThree} className="cc-design3" src={CC_DESIGN_3} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignFour} className="cc-design4" src={CC_DESIGN_4} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignFive} className="cc-design5" src={CC_DESIGN_5} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignSix} className="cc-design6" src={CC_DESIGN_6} />
          </div>
          <div>
          <Button className="button-select">Select Card</Button>
        </div>
      </div>
    </main>
  );
}
