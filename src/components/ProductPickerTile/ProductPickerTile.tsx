import React from "react";
import "./ProductPickerTile.scss";
import ProductPickerTileModel from "../../models/ProductPickerTile.model";
import lawns from "../../assets/icons/lawns.svg";
import driveways from "../../assets/icons/driveways.svg";
import tree from "../../assets/icons/tree.svg";
import vegetable from "../../assets/icons/vegetable.svg";
import flowerBeds from "../../assets/icons/flowerbeds.svg";
import poisonIvy from "../../assets/icons/poison-ivy.svg";
import fence from "../../assets/icons/fence.svg";

function ProductPickerTile(tile: ProductPickerTileModel): JSX.Element {
  return (
    <section className="product-tile-wrapper row">
      <section className="category-circle col-2">
        <img className="category-img" src={lawns} alt="lawns" />
      </section>
      <section className="category-circle col-2">
        <img className="category-img" src={driveways} alt="lawns" />
      </section>
      <section className="category-circle col-2">
        <img className="category-img" src={tree} alt="lawns" />
      </section>
      <section className="category-circle col-2">
        <img className="category-img" src={vegetable} alt="lawns" />
      </section>
      <section className="category-circle col-2">
        <img className="category-img" src={flowerBeds} alt="lawns" />
      </section>
      <section className="category-circle col-2">
        <img className="category-img" src={poisonIvy} alt="lawns" />
      </section>
      <section className="category-circle col-2">
        <img className="category-img" src={fence} alt="lawns" />
      </section>
      <h1>{tile.name}</h1>
      <h1>{tile.imageUrl}</h1>
    </section>
  );
}

export default ProductPickerTile;
