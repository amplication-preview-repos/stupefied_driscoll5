import { registerEnumType } from "@nestjs/graphql";

export enum RefundStatus {
    NotRequested = "Not Requested",
    Requested = "Requested",
    InProcess = "In Process",
    Completed = "Completed",
    Rejected = "Rejected"
}

registerEnumType(RefundStatus, {
    name: "RefundStatus",
  });