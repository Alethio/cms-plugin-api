import { ITranslation } from "./ITranslation";
import { ILogger } from "./ILogger";
export interface IContentProps<TContext = {}, TSlotType = undefined> {
    context: TContext;
    translation: ITranslation;
    locale: string;
    logger: ILogger;
    uiStateContainer: {};
    sidebarVisible: boolean;
    slots: TSlotType extends string | number ? Record<TSlotType, JSX.Element[]> | undefined : undefined;
}
