import { AnyAction } from 'redux';
import customersService from '../../services/CustomersService';
import { SET_CUSTOMERS_REVENUES } from './actionTypes';
import { ReduxThunkAction, AppDispatch } from '../store';
import CustomerRevenueDTO from '../../DTO/CustomerRevenueDTO';

const setCustomersRevenuesResult = (
  invoices: CustomerRevenueDTO[]
): AnyAction => ({
  type: SET_CUSTOMERS_REVENUES,
  payload: invoices,
});

export const fetchCustomersRevenues =
  (): ReduxThunkAction =>
  (dispatch: AppDispatch): void => {
    customersService
      .getCustomersRevenues()
      .then((data) => dispatch(setCustomersRevenuesResult(data)));
  };
