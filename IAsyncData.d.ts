import { LoadStatus } from "./LoadStatus";
export interface ILoadedAsyncData<T> {
    data: T;
}
export interface IAsyncData<T> {
    data: T | undefined;
    loadStatus: LoadStatus;
    isLoaded(): this is ILoadedAsyncData<T>;
    isLoading(): boolean;
}
