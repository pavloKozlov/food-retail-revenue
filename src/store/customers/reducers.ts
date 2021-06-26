import { AnyAction } from 'redux';
import CustomerRevenueDTO from '../../DTO/CustomerRevenueDTO';
import { SET_CUSTOMERS_REVENUES } from './actionTypes';

interface ICustomersReducer {
  customersRevenues: CustomerRevenueDTO[];
}

const defaultState: ICustomersReducer = {
  customersRevenues: [],
};

const reducers = (
  state: ICustomersReducer = defaultState,
  action: AnyAction
): ICustomersReducer => {
  switch (action.type) {
    case SET_CUSTOMERS_REVENUES:
      return {
        ...state,
        customersRevenues: action.payload as CustomerRevenueDTO[],
      };
    default:
  }
  return state;
};

export default reducers;
