import { IAsyncData } from "./IAsyncData";
export interface ILiveContentProps {
    asyncData: Map<string, IAsyncData<unknown>>;
}
