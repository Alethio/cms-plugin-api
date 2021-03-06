/// <reference types="react" />
import { IDataAdapterInlineConfig } from "./IDataAdapterConfig";
import { ILiveContentProps } from "./ILiveContentProps";
export interface IModuleInlineDef<TContentProps, TContext, TExtraProps = {}> {
    dataAdapters: IDataAdapterInlineConfig<TContext>[];
    getContentComponent(): Promise<React.ComponentType<TContentProps>>;
    getContentProps(asyncData: TExtraProps & ILiveContentProps): TContentProps;
    getErrorPlaceholder?(props: TExtraProps & ILiveContentProps): JSX.Element;
    getLoadingPlaceholder?(props: TExtraProps & ILiveContentProps): JSX.Element;
}
