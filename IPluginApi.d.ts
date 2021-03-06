import { IDataSource } from "./IDataSource";
import { IDataAdapter } from "./IDataAdapter";
import { IPageDef } from "./IPageDef";
import { IContextDef } from "./IContextDef";
import { IModuleDef } from "./IModuleDef";
export interface IPluginApi {
    addDataSource(uri: string, dataSource: IDataSource): void;
    addDataAdapter(uri: string, dataAdapter: IDataAdapter<any, any>): void;
    addPageDef(uri: string, pageDef: IPageDef<any, any>): void;
    addModuleDef(uri: string, moduleDef: IModuleDef<any, any, any>): void;
    addContextDef(uri: string, contextDef: IContextDef<any, any>): void;
}
