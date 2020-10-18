import * as React from "react";
import productPickerLogo from "../../logo.svg";
import roundupLogo from "../../roundup-logo.png";

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={roundupLogo} className="roundup-logo" alt="roundup-logo" />
        <img
          src={productPickerLogo}
          className="product-picker-logo"
          alt="product-picker-logo"
        />
      </header>
    );
  }
}

export default Header;
