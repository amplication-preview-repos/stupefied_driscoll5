import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderLineServiceBase } from "./base/orderLine.service.base";

@Injectable()
export class OrderLineService extends OrderLineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
