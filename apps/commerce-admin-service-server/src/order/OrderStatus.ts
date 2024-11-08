import { registerEnumType } from "@nestjs/graphql";

export enum OrderStatus {
    Pending = "Pending",
    Confirmed = "Confirmed",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}

registerEnumType(OrderStatus, {
    name: "OrderStatus",
  });