import { ILogger } from "./ILogger";
import { IPluginApi } from "./IPluginApi";
export interface IPlugin {
    init(config: any, api: IPluginApi, logger: ILogger, publicPath: string): void;
    loadTranslations?(locale: string): Promise<Record<string, string>>;
    getAvailableLocales?(): string[];
}
