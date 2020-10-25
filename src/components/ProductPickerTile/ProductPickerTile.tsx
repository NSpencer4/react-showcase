import React from "react";
import "./ProductPickerTile.scss";
import ProductPickerTileModel from "../../models/ProductPickerTile.model";

function ProductPickerTile(tile: ProductPickerTileModel): JSX.Element {
  return (
    <section className="product-tile-wrapper">
      <section className="category-circle">
        <img src={} />
      </section>
      <h1>{tile.name}</h1>
      <h1>{tile.imageUrl}</h1>
    </section>
  );
}

export default ProductPickerTile;
