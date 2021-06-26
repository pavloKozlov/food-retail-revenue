import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoices } from '../../store/invoices/actions';
import { RootState } from '../../store/store';
import DashboardPage from './DashboardPage';

const DashboardPageContainer = () => {
  const invoices = useSelector((state: RootState) => state.invoices.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return <DashboardPage invoices={invoices} />;
};

export default DashboardPageContainer;
