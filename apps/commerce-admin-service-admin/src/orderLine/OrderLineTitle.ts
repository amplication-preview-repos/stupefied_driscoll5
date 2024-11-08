import { OrderLine as TOrderLine } from "../api/orderLine/OrderLine";

export const ORDERLINE_TITLE_FIELD = "id";

export const OrderLineTitle = (record: TOrderLine): string => {
  return record.id?.toString() || String(record.id);
};
