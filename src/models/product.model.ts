class Product {
  name: string;
  imageUrl: string;
  usages: string[];
  performance: {
    rainproof: string;
    visibleResults: string;
    replant: string;
  };

  constructor(
    name: string,
    imageUrl: string,
    usages: string[],
    performance: {
      rainproof: string;
      visibleResults: string;
      replant: string;
    }
  ) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.usages = usages;
    this.performance = performance;
  }
}

export default Product;
