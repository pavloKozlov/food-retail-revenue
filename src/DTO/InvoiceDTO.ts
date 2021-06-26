import InvoiceLineDTO from './InvoiceLineDTO';

interface InvoiceDTO {
  id: number;
  customer_id: number;
  customer_name: string;
  date: string,
  total_invoice: number;
  total_margin: number;
  region:  string;
  invoice_lines: InvoiceLineDTO[];
}

export default InvoiceDTO;
