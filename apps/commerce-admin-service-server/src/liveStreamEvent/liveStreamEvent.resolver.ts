import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LiveStreamEventResolverBase } from "./base/liveStreamEvent.resolver.base";
import { LiveStreamEvent } from "./base/LiveStreamEvent";
import { LiveStreamEventService } from "./liveStreamEvent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LiveStreamEvent)
export class LiveStreamEventResolver extends LiveStreamEventResolverBase {
  constructor(
    protected readonly service: LiveStreamEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
