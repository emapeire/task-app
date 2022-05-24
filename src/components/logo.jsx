import React from "react";
import '../stylesheets/logo.css';
import freeCodeCampLogo from "../images/freecodecamp-logo.png";

const Logo = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo" 
        alt="freecodecamp-logo"
      />
    </div>
  );
};

export default Logo;