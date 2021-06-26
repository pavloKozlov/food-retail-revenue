import BaseService from './BaseService';
import InvoiceDTO from '../DTO/InvoiceDTO';

/**
 * Service class that represents `/invoices` related endpoints.
 */
class InvoicesService extends BaseService {
  constructor() {
    super('/invoices');
  }

  /**
   * Gets list of all company invoices + content (invoices lines).
   * id parameter is optional, if not specified, all the products will be retrieved.
   * 
   * @param id - The invoice id.
   * @returns The list of company invoices.
   */
  public getInvoices(id?: number): Promise<InvoiceDTO[]> {
    const correctedParam = id === undefined ? '' : id;
    return this.get<InvoiceDTO[]>(`/${correctedParam}`);
  }
}

export default new InvoicesService();
