import BaseService from './BaseService';
import ProductDTO from '../DTO/ProductDTO';

/**
 * Service class that represents `/products` related endpoints.
 */
class ProductsService extends BaseService {
  constructor() {
    super('/products');
  }

  /**
   * Gets list of all available products.
   * id parameter is optional, if not specified, all the products will be retrieved.
   *
   * @param id - The product id.
   * @returns The list of products.
   */
  public getProducts(id?: number): Promise<ProductDTO[]> {
    const correctedParam = id === undefined ? '' : id;
    return this.get<ProductDTO[]>(`/${correctedParam}`);
  }
}

export default new ProductsService();
