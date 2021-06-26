import { combineReducers } from 'redux';
import invoices from './invoices/reducers';

const rootReducers = combineReducers({
  invoices,
});

export default rootReducers;
