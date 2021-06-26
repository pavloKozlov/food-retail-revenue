import { AnyAction } from "redux";
import InvoiceService from "../../services/InvoiceService";
import { SET_INVOICES } from "./actionTypes";
import InvoiceDTO from "../../DTO/InvoiceDTO";
import { ReduxThunkAction } from "../store";
import { AppDispatch } from "../store";

const setInvoicesResult = (invoices: InvoiceDTO[]): AnyAction => ({
  type: SET_INVOICES,
  payload: invoices,
})

export const fetchInvoices = (): ReduxThunkAction =>
  (dispatch: AppDispatch): void => {
    InvoiceService.getInvoices()
      .then((data) => dispatch(setInvoicesResult(data)))
  }