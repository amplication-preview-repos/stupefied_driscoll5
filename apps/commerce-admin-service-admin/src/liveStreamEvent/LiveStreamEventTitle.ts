import { LiveStreamEvent as TLiveStreamEvent } from "../api/liveStreamEvent/LiveStreamEvent";

export const LIVESTREAMEVENT_TITLE_FIELD = "id";

export const LiveStreamEventTitle = (record: TLiveStreamEvent): string => {
  return record.id?.toString() || String(record.id);
};
