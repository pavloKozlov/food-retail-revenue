import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoices } from '../../store/invoices/actions';
import { fetchCustomersRevenues } from '../../store/customers/actions';
import { RootState } from '../../store/store';
import DashboardPage from './DashboardPage';

const DashboardPageContainer = () => {
  const customerRevenues = useSelector(
    (state: RootState) => state.customers.customersRevenues
  );
  const invoices = useSelector((state: RootState) => state.invoices.data).slice(
    0,
    15
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomersRevenues());
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <DashboardPage invoices={invoices} customerRevenues={customerRevenues} />
  );
};

export default DashboardPageContainer;
