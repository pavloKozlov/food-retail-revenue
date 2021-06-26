import React, { FC, ReactElement } from 'react';
import CustomerRevenueDTO from '../../DTO/CustomerRevenueDTO';
import BaseTable from '../BaseTable';
import { columns } from './BestCustomersTable.constants';

interface BestCustomersTableProps {
  data: CustomerRevenueDTO[];
}

const BestCustomersTable: FC<BestCustomersTableProps> = ({
  data,
}): ReactElement => <BaseTable columns={columns} data={data} />;

export default BestCustomersTable;
