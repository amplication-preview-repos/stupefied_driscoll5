import { OrderLineWhereInput } from "./OrderLineWhereInput";

export type OrderLineListRelationFilter = {
  every?: OrderLineWhereInput;
  some?: OrderLineWhereInput;
  none?: OrderLineWhereInput;
};
