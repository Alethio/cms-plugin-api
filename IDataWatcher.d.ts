import { IEvent } from "@puzzl/core/lib/event/EventDispatcher";
export interface IDataWatcher {
    onData: IEvent<void, void>;
    watch(): void;
    unwatch(): void;
}
