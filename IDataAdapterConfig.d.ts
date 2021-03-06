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
    /** An alias for the adapter URI, used for getting the adapter result easier from asyncData. */
    alias?: string;
}
export interface IDataAdapterInlineConfig<TContext> {
    def: IDataAdapter<TContext, unknown>;
    /** An alias for the adapter URI, used for getting the adapter result easier from asyncData. */
    alias: string;
    /**
     * If true, the module will be rendered before data from this adapter was fully loaded,
     * and the data will be 'undefined'. Use this for non-critical adapters or when managing loading indicators manually
     */
    optional?: boolean;
}
