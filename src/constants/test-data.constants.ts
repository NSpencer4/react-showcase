import Product from '../models/product.model';

export default class TestDataConstants {
  public static readonly products: Product[] = [
    new Product(
      'Roundup® Ready-To-Use Weed & Grass Killer III Products',
      'https://www.roundup.com/sites/g/files/oydgjc121/files/asset_images/Rup-Product-Picker_Weed-And-Grass-Killer-III.jpg',
      [
        'Driveways, Patios & Gravel',
        'Tree Rings & Mulch Beds',
        'Vegetable Gardens',
        'Flowerbeds & Garden Prep',
        'Fence Lines & Foundations',
      ],
      {
        rainproof: '10 min',
        visibleResults: '3 hours',
        replant: '1-3 days',
      }
    ),
  ];
}
