import { LiveStreamEventWhereInput } from "./LiveStreamEventWhereInput";
import { LiveStreamEventOrderByInput } from "./LiveStreamEventOrderByInput";

export type LiveStreamEventFindManyArgs = {
  where?: LiveStreamEventWhereInput;
  orderBy?: Array<LiveStreamEventOrderByInput>;
  skip?: number;
  take?: number;
};
