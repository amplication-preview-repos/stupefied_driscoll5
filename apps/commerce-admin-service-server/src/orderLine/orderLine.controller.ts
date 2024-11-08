import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderLineService } from "./orderLine.service";
import { OrderLineControllerBase } from "./base/orderLine.controller.base";

@swagger.ApiTags("orderLines")
@common.Controller("orderLines")
export class OrderLineController extends OrderLineControllerBase {
  constructor(
    protected readonly service: OrderLineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
