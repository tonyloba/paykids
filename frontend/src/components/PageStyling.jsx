import { useState } from "react";
import Button from 'muicss/lib/react/button';
import { purple } from '@mui/material/colors';
// import "/components/Button.scss"

export default function PageStyling(props) {
  // Frame
  const WHITE = "transparent";
  const BLUE = "#FFFFFF";
  const PURPLE = "#FFFFFF";
  const PINK = "#FFFFFF";
  const GREEN = "#FFFFFF";
  const ORANGE = "#FFFFFF";
  const DEFAULT = "";
  
  // Main app background
  const WHITE_BACKGROUND = "white";
  const BLUE_BACKGROUND = "#197BBD";
  const PURPLE_BACKGROUND = "#E1BEE7";
  const PINK_BACKGROUND = "#EC407A";
  const GREEN_BACKGROUND = "#8BC34A";
  const ORANGE_BACKGROUND = "#FF5722";
  const DEFAULT_COLOR_BACKGROUND = "";

  const WHITE_LOGO = "https://i.ibb.co/rdVfcqT/logo-white.png";
  const BLUE_LOGO = "https://i.ibb.co/vByHTtJ/logo-blue.png"; 

  const [color, setColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const [settingsFrame, setSettingsFrame] = useState("white");
  const [bodyBackground, setBodyBackground] = useState(WHITE);
  const [logo, setLogo] = useState(BLUE_LOGO);

  const white = function () {
    setColor("White");
    setFontColor("black");
    setSettingsFrame("white");
    setBodyBackground(WHITE);
    setLogo(BLUE_LOGO);
  };
  const blue = function () {
    setColor("Blue");
    setFontColor("white");
    setSettingsFrame(BLUE);
    setBodyBackground(BLUE_BACKGROUND);
    setLogo(WHITE_LOGO);
  };
  const purple = function () {
    setColor("Purple");
    setFontColor("white");
    setSettingsFrame(PURPLE);
    setBodyBackground(PURPLE_BACKGROUND);
    setLogo(WHITE_LOGO);
  };
  const pink = function () {
    setColor("Pink");
    setFontColor("white");
    setSettingsFrame(PINK);
    setBodyBackground(PINK_BACKGROUND);
    setLogo(WHITE_LOGO);
  };
  const green = function () {
    setColor("Green");
    setFontColor("white");
    setSettingsFrame(GREEN);
    setBodyBackground(GREEN_BACKGROUND);
    setLogo(WHITE_LOGO);
  };
  const orange = function () {
    setColor("Orange");
    setFontColor("white");
    setSettingsFrame(ORANGE);  
    setBodyBackground(ORANGE_BACKGROUND);
    setLogo(WHITE_LOGO);
  };  
  // set default colours here
  const clear = function () {
    setColor("White");
    setFontColor("black");
    setSettingsFrame("white");
    setBodyBackground(WHITE);
    setLogo(BLUE_LOGO);
  };

  return (

    <div style={{backgroundColor: bodyBackground}} className="App">
      <header>
        {/* <img className="nav__logo" src="https://i.ibb.co/vByHTtJ/logo-blue.png"/> */}
        <img className="nav__logo" src={logo}/>
        
      </header>
    <main className="container">
    <div className="text">
          <p className="heading">Pick your color style</p>
        </div>
      <article style={{background: settingsFrame}} className="frame-send-money">
      <p>Change theme to: {color}</p>
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css"/>
          <div>
            <Button onClick={white} className="button-money" style={{background: WHITE_BACKGROUND, border:"1px solid grey", color:"grey"}}>White</Button>
            <Button onClick={blue} className="button-money" style={{background: BLUE_BACKGROUND}}>Blue</Button>
            <Button onClick={purple} className="button-money" style={{background: PURPLE_BACKGROUND}}>Purple</Button>
          </div>
          <div>
            <Button onClick={pink} className="button-money" style={{background: PINK_BACKGROUND}}>Pink</Button>
            <Button onClick={green} className="button-money" style={{background: GREEN_BACKGROUND}}>Green</Button>
            <Button onClick={orange} className="button-money2" style={{background: ORANGE_BACKGROUND}}>Orange</Button>
          </div>
          {/* this is a form need event prvent default */}
          <div>
            <Button style={{background: bodyBackground, color: fontColor}} className="button-confirm">Change</Button>
            <Button style={{background: bodyBackground, color: fontColor}} onClick={clear} className="button-cancel">Cancel</Button>
          </div>
        </div>
      </article>
    </main>
    </div>
  );
}
