import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

/**
 * Base abstract class for services.
 */
abstract class BaseService {
  private subRoute: string;

  constructor(subRoute: string) {
    this.subRoute = subRoute;
  }

  /**
   * Sends get API request.
   *
   * @param url - url string starting after base url.
   * @returns The promise that resolves with <T> type.
   */
  protected get<T>(url: string): Promise<T> {
    return axios
      .get(`${BASE_URL}${this.subRoute}${url}`)
      .then((response) => response.data);
  }
}

export default BaseService;
