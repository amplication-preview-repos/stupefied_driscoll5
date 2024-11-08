import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderLineModuleBase } from "./base/orderLine.module.base";
import { OrderLineService } from "./orderLine.service";
import { OrderLineController } from "./orderLine.controller";
import { OrderLineResolver } from "./orderLine.resolver";

@Module({
  imports: [OrderLineModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderLineController],
  providers: [OrderLineService, OrderLineResolver],
  exports: [OrderLineService],
})
export class OrderLineModule {}
