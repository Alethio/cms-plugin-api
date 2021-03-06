/// <reference types="react" />
import { IDataAdapterConfig } from "./IDataAdapterConfig";
import { IContentProps } from "./IContentProps";
import { ILiveContentProps } from "./ILiveContentProps";
export interface IModuleDef<TContentProps, TContext, TSlotType = undefined> {
    contextType: Record<keyof TContext, "number" | "string">;
    slotNames?: string[];
    dataAdapters: IDataAdapterConfig<TContext>[];
    getContentComponent(): Promise<React.ComponentClass<TContentProps> | React.StatelessComponent<TContentProps>>;
    getContentProps(props: IContentProps<TContext, TSlotType> & ILiveContentProps): TContentProps;
    getErrorPlaceholder?(props: IContentProps<TContext, TSlotType> & ILiveContentProps): JSX.Element;
    getLoadingPlaceholder?(props: IContentProps<TContext, TSlotType> & ILiveContentProps): JSX.Element;
    getHelpComponent?(): React.ComponentType<IContentProps<TContext, TSlotType>>;
    getWrapperStyle?(props: IContentProps<TContext, TSlotType> & ILiveContentProps): React.CSSProperties;
}
