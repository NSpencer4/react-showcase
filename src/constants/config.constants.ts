import ConfigModel from '../models/config.model';

export default class ConfigConstants {
  public static readonly PRODUCTS_API_ENDPOINT: string =
  'http://localhost:8080/graphql';

  public static readonly GLOBAL_CONFIG: ConfigModel = {
    productsAPIEndpoint: ConfigConstants.PRODUCTS_API_ENDPOINT,
  };
}
