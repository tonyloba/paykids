import "./App.css";
import Button from "muicss/lib/react/button";
import ChildrensDashboard from "./components/ChildrensDashboard";
import ChildrensLogin from "./components/ChildrensLogin";
import ChildrensRequestForm from "./components/ChildrensRequestForm";
import ChildrensVisualSettings from "./components/ChildrensVisualSettings";
import PageStyling from "./components/PageStyling";
import LandingPageBackground from "./components/LandingPageBackground";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [currentChild, setCurrentChild] = useState(null);
 
  return (
    <BrowserRouter>
      <div className="App">
        <header>
           {currentChild  && <img className="nav__logo" src="https://i.ibb.co/vByHTtJ/logo-blue.png"/>}
          <div>
            {!currentChild  &&  <Button  onClick={() => setCurrentChild({name: "Tina"})} primary className="button-login"><Link className="link" to="/childrensdashboard">Login</Link></Button> }
            {currentChild   &&  <Button  primary className="button-dashboard"><Link className="link" to="/childrensdashboard">Dashboard</Link></Button> }
            {currentChild   &&  <Button  primary className="button-settings"><Link className="link" to="/childrenssettings">Choose Card</Link></Button> }
            {currentChild   &&  <Button  primary className="button-theme"><Link className="link" to="/style">Choose Theme</Link></Button> }
            {currentChild   &&  <Button  primary className="button-request"><Link className="link" to="/requestform">Request Money</Link></Button> }
            {currentChild   &&  <Button  onClick={() => setCurrentChild(null)} primary className="button-login"><Link className="link" to="/">Logout</Link></Button> }
          </div>
        </header>

        {currentChild && (
          <Routes>
            <Route path="/childrensdashboard" element={<ChildrensDashboard />} />
            <Route path="/childrenssettings"  element={<ChildrensVisualSettings />} />
            <Route path="/style"              element={<PageStyling />} />
            <Route path="/requestform"        element={<ChildrensRequestForm />} />
          </Routes>
        )}
          <Routes>
            <Route path="/"                   element={<LandingPageBackground />}/>
            <Route path="/childrenslogin"     element={<ChildrensLogin />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

