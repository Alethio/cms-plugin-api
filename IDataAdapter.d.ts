import { IDataWatcher } from "./IDataWatcher";
import { CancellationToken } from "@puzzl/core/lib/async/cancellation";
export interface IDataAdapter<TContext, TData> {
    contextType: Record<keyof TContext, "number" | "string">;
    load(context: TContext, cancellationToken: CancellationToken): Promise<TData | undefined>;
    createWatcher?(context: TContext, lastData: TData | undefined): IDataWatcher | IDataWatcher[];
}
