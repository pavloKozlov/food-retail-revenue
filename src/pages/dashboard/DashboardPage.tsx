import React, { FC, ReactElement } from 'react';
import BestCustomersTable from '../../components/BestCustomersTable/BestCustomersTable';
import InvoicesTable from '../../components/InvoicesTable';
import CustomerRevenueDTO from '../../DTO/CustomerRevenueDTO';
import InvoiceDTO from '../../DTO/InvoiceDTO';

interface DashboardProps {
  customerRevenues: CustomerRevenueDTO[];
  invoices: InvoiceDTO[];
}

const DashboardPage: FC<DashboardProps> = ({
  customerRevenues,
  invoices,
}): ReactElement => {
  return (
    <div>
      dashboard page
      <InvoicesTable data={invoices} />
      <BestCustomersTable data={customerRevenues} />
    </div>
  );
};

export default DashboardPage;
