import { combineReducers } from 'redux';
import customers from './customers/reducers';
import invoices from './invoices/reducers';

const rootReducers = combineReducers({
  customers,
  invoices,
});

export default rootReducers;
