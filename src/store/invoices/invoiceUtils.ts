import InvoiceDTO from '../../DTO/InvoiceDTO';

/**
 * Sort function for InvoiceDTO to sort by date (desc).
 *
 * @param {InvoiceDTO} a
 * @param {InvoiceDTO} b
 */
const sortByDateFunc = (a: InvoiceDTO, b: InvoiceDTO) =>
  new Date(b.date).valueOf() - new Date(a.date).valueOf();

export { sortByDateFunc };
