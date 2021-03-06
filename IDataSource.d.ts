import { IDataAdapterRefConfig } from "./IDataAdapterConfig";

export interface IDataSource {
    /**
     * Simple adapter dependencies when we depend on data from other plugins
     *
     * Only simple adapters are supported, meaning they must
     * - not depend on a data source being already initialized
     * - have a root contextType ({}),
     * - have no nested dependencies
     */
    dependencies?: IDataAdapterRefConfig[];
    /**
     * Initializes the data source, performing any async operations needed to make the data source functional
     *
     * [cms v1.0.0-beta.12+]: If a dependencies array was specified, data loaded from each depending adapter is also passed to this method
     *
     * @param depData A map of adapter URIs to data returned by respective adapter. Adapter alias is also supported as key
     */
    init(depData: Map<string, unknown>): Promise<void>;
}
