interface InvoiceLinesDTO {
  product_id: number;
  product_name: string;
  unit_price: number;
  quantity: number;
  total_line: number;
  total_margin: number;
}

export default InvoiceLinesDTO;
