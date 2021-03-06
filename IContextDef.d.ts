import { IDataAdapterRefConfig } from "./IDataAdapterConfig";
import { IAsyncData } from "./IAsyncData";
export interface IContextDef<TParentContext, TChildContext> {
    parentContextType: Record<keyof TParentContext, "number" | "string">;
    contextType: Record<keyof TChildContext, "number" | "string">;
    dataAdapters: IDataAdapterRefConfig[];
    create(parentContext: TParentContext, parentData: Map<string, IAsyncData<unknown>>): TChildContext | undefined;
}
