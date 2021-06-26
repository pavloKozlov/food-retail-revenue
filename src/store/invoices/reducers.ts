import { AnyAction } from 'redux';
import InvoiceDTO from '../../DTO/InvoiceDTO';
import { SET_INVOICES } from './actionTypes';
import { sortByDateFunc } from './invoiceUtils';

interface IInvoicesReducer {
  data: InvoiceDTO[];
}

const defaultState: IInvoicesReducer = {
  data: [],
};

const reducers = (
  state: IInvoicesReducer = defaultState,
  action: AnyAction
): IInvoicesReducer => {
  switch (action.type) {
    case SET_INVOICES:
      return {
        ...state,
        data: (action.payload as InvoiceDTO[]).sort(sortByDateFunc),
      };
    default:
  }
  return state;
};

export default reducers;
