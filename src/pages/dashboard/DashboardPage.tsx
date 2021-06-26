import React, { useEffect, useState } from 'react';
import BaseTable from '../../components/BaseTable';
import InvoiceDTO from '../../DTO/InvoiceDTO';
import invoiceService from '../../services/InvoiceService';

const DashboardPage = () => {
  const [invoices, setInvoices] = useState<InvoiceDTO[]>([]);

  useEffect(() => {
    invoiceService.getInvoices().then((data) => setInvoices(data));
  }, []);

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
