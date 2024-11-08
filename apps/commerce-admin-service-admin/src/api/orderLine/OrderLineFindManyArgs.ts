import { OrderLineWhereInput } from "./OrderLineWhereInput";
import { OrderLineOrderByInput } from "./OrderLineOrderByInput";

export type OrderLineFindManyArgs = {
  where?: OrderLineWhereInput;
  orderBy?: Array<OrderLineOrderByInput>;
  skip?: number;
  take?: number;
};
