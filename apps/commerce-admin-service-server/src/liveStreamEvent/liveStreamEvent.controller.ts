import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LiveStreamEventService } from "./liveStreamEvent.service";
import { LiveStreamEventControllerBase } from "./base/liveStreamEvent.controller.base";

@swagger.ApiTags("liveStreamEvents")
@common.Controller("liveStreamEvents")
export class LiveStreamEventController extends LiveStreamEventControllerBase {
  constructor(
    protected readonly service: LiveStreamEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
