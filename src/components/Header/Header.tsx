import React from "react";
import productPickerLogo from "../../logo.svg";
import roundupLogo from "../../roundup-logo.png";
import "./Header.scss";

function Header(): JSX.Element {
  return (
    <header className="row align-items-center">
      <div className="col-xs-2 col-sm-3 col-md-3">
        <img src={roundupLogo} id="roundup-logo" alt="roundup-logo" />
      </div>
      <div className="col-xs-9 col-sm-8 col-md-9">
        <img
          src={productPickerLogo}
          id="product-picker-logo"
          alt="product-picker-logo"
        />
      </div>
    </header>
  );
}

export default Header;
