import React from "react";
import "./ProductPicker.scss";
import ConfigContext from "../../context/ConfigContext";

class ProductPicker extends React.PureComponent {
  componentDidMount(): void {
    console.log(this.context);
  }

  render(): JSX.Element {
    return (
      <section id="product-picker-wrapper">
        <h1>Body</h1>
      </section>
    );
  }
}

ProductPicker.contextType = ConfigContext;

export default ProductPicker;
