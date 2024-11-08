import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LiveStreamEventModuleBase } from "./base/liveStreamEvent.module.base";
import { LiveStreamEventService } from "./liveStreamEvent.service";
import { LiveStreamEventController } from "./liveStreamEvent.controller";
import { LiveStreamEventResolver } from "./liveStreamEvent.resolver";

@Module({
  imports: [LiveStreamEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [LiveStreamEventController],
  providers: [LiveStreamEventService, LiveStreamEventResolver],
  exports: [LiveStreamEventService],
})
export class LiveStreamEventModule {}
