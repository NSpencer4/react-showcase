import React from "react";
import "./ProductPicker.scss";
import ConfigContext from "../../context/ConfigContext";

// eslint-disable-next-line react/prefer-stateless-function
class ProductPicker extends React.Component {
  static configContext = ConfigContext;

  componentDidMount(): void {
    console.log(ProductPicker.configContext);
  }

  render(): JSX.Element {
    return (
      <section id="product-picker-wrapper">
        <h1>test</h1>
      </section>
    );
  }
}

export default ProductPicker;
