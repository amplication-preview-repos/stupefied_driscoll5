/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OrderLine as PrismaOrderLine } from "@prisma/client";

export class OrderLineServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OrderLineCountArgs, "select">
  ): Promise<number> {
    return this.prisma.orderLine.count(args);
  }

  async orderLines(
    args: Prisma.OrderLineFindManyArgs
  ): Promise<PrismaOrderLine[]> {
    return this.prisma.orderLine.findMany(args);
  }
  async orderLine(
    args: Prisma.OrderLineFindUniqueArgs
  ): Promise<PrismaOrderLine | null> {
    return this.prisma.orderLine.findUnique(args);
  }
  async createOrderLine(
    args: Prisma.OrderLineCreateArgs
  ): Promise<PrismaOrderLine> {
    return this.prisma.orderLine.create(args);
  }
  async updateOrderLine(
    args: Prisma.OrderLineUpdateArgs
  ): Promise<PrismaOrderLine> {
    return this.prisma.orderLine.update(args);
  }
  async deleteOrderLine(
    args: Prisma.OrderLineDeleteArgs
  ): Promise<PrismaOrderLine> {
    return this.prisma.orderLine.delete(args);
  }
}
