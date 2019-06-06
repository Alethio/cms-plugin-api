import { IDataAdapter } from "./IDataAdapter";
export declare type IDataAdapterConfig<TContext> = IDataAdapterRefConfig | IDataAdapterInlineConfig<TContext>;
export interface IDataAdapterRefConfig {
    /** adapter URI (e.g. adapter://publisher.tld/path) */
    ref: string;
    /**
     * If true, the module will be rendered before data from this adapter was fully loaded,
     * and the data will be 'undefined'. Use this for non-critical adapters or when managing loading indicators manually
     */
    optional?: boolean;
}
export interface IDataAdapterInlineConfig<TContext> {
    def: IDataAdapter<TContext, unknown>;
    /** Key used for asyncData mapping */
    alias: string;
    /**
     * If true, the module will be rendered before data from this adapter was fully loaded,
     * and the data will be 'undefined'. Use this for non-critical adapters or when managing loading indicators manually
     */
    optional?: boolean;
}
