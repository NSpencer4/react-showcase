import React from "react";
import "./ProductPicker.scss";
import ConfigContext from "../../context/ConfigContext";
import TestDataConstants from "../../constants/test-data.constants";
import ProductPickerTile from "../../components/ProductPickerTile/ProductPickerTile";
import Product from "../../models/product.model";

interface ProductPickerState {
  productData: Product[];
}

// eslint-disable-next-line @typescript-eslint/ban-types
class ProductPicker extends React.PureComponent<{}, ProductPickerState> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {}) {
    super(props);
    this.state = { productData: TestDataConstants.products };
  }

  render(): JSX.Element {
    const { productData } = this.state;
    return (
      <section id="product-picker-wrapper">
        <div className="row">
          <div className="col-2">
            <ProductPickerTile
              name={productData[0].name}
              imageUrl={productData[0].imageUrl}
            />
          </div>
        </div>
      </section>
    );
  }
}

ProductPicker.contextType = ConfigContext;

export default ProductPicker;
