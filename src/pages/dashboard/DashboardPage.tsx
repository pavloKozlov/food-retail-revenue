import React, { FC, ReactElement } from 'react';
import InvoicesTable from '../../components/InvoicesTable';
import InvoiceDTO from '../../DTO/InvoiceDTO';

interface DashboardProps {
  invoices: InvoiceDTO[];
}

const DashboardPage: FC<DashboardProps> = ({ invoices }): ReactElement => {
  return (
    <div>
      dashboard page
      <InvoicesTable data={invoices} />
    </div>
  );
};

export default DashboardPage;
