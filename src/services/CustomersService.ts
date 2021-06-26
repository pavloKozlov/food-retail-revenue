import BaseService from './BaseService';
import CustomerDTO from '../DTO/CustomerDTO';
import CustomerRevenueDTO from '../DTO/CustomerRevenueDTO';

/**
 * Service class that represents `/customers` related endpoints.
 */
class CustomersService extends BaseService {
  constructor() {
    super('/customers');
  }

  /**
   * Gets list of all company customers.
   * id parameter is optional, if not specified, all the products will be retrieved
   * 
   * @param id - The customer id.
   * @returns The list of customers.
   */
  public getCustomers(id?: number): Promise<CustomerDTO[]> {
    const correctedParam = id === undefined ? '' : id;
    return this.get<CustomerDTO[]>(`/${correctedParam}`);
  }

  /**
   * Gets the customers list, with the total revenue, margin and invoices count they generated.
   * 
   * @returns The list of Customer revenues
   */
  public getCustomersRevenues(): Promise<CustomerRevenueDTO[]> {
    return this.get<CustomerRevenueDTO[]>('/revenues');
  }
}

export default new CustomersService();
