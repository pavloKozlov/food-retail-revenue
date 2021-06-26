import React, { FC } from 'react';
import BaseTable from '../../components/BaseTable';
import InvoiceDTO from '../../DTO/InvoiceDTO';

interface DashboardProps {
  invoices: InvoiceDTO[];
}

const DashboardPage: FC<DashboardProps> = ({ invoices }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Customer Name',
        accessor: 'customer_name',
      },
      {
        Header: 'Region',
        accessor: 'region',
      },
      {
        Header: 'Total',
        accessor: 'total_invoice',
      },
    ],
    []
  );
  return (
    <div>
      dashboard page
      <BaseTable columns={columns} data={invoices} />
    </div>
  );
};

export default DashboardPage;
