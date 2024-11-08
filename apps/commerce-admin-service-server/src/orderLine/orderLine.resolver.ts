import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrderLineResolverBase } from "./base/orderLine.resolver.base";
import { OrderLine } from "./base/OrderLine";
import { OrderLineService } from "./orderLine.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderLine)
export class OrderLineResolver extends OrderLineResolverBase {
  constructor(
    protected readonly service: OrderLineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
