import BaseService from './BaseService';
import CategoryDTO from '../DTO/CategoryDTO';

/**
 * Service class that represents `/categories` related endpoints.
 */
class CategoriesService extends BaseService {
  constructor() {
    super('/categories');
  }

  /**
   * Gets the products categories, and the total amount of revenues and margin they generated.
   *
   * @returns The list of products categories.
   */
  public getCategoriesRevenues(): Promise<CategoryDTO[]> {
    return this.get<CategoryDTO[]>('/revenues');
  }
}

export default new CategoriesService();
