import BaseService from './BaseService';
import RevenueDTO from '../DTO/RevenueDTO';
import RevenuePeriodEnum from '../enums/RevenuePeriodEnum';

/**
 * Service class that represents `/revenues` related endpoints.
 */
class RevenuesService extends BaseService {
  constructor() {
    super('/revenues');
  }

  /**
   * Gets calculations of the revenues of the company on a time period.
   * 
   * @param period - The revenue period.
   * @returns The list of company revenues.
   */
  public getRevenues(period: RevenuePeriodEnum): Promise<RevenueDTO[]> {
    return this.get<RevenueDTO[]>(`/${period}`);
  }
}

export default new RevenuesService();
