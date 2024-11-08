import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LiveStreamEventServiceBase } from "./base/liveStreamEvent.service.base";

@Injectable()
export class LiveStreamEventService extends LiveStreamEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
