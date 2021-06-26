import React, { FC, ReactElement } from 'react';
import InvoiceDTO from '../../DTO/InvoiceDTO';
import BaseTable from '../BaseTable';
import { columns } from './InvoicesTable.constants';

interface InvoiceTableProps {
  data: InvoiceDTO[];
}

const InvoiceTable: FC<InvoiceTableProps> = ({ data }): ReactElement => (
  <BaseTable columns={columns} data={data} />
);

export default InvoiceTable;
