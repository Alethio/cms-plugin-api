export declare type ITranslations = Record<string, string>;
export declare type ITranslationParams = Record<string, string | number>;
/**
 * Translation strings service
 */
export interface ITranslation {
    /**
     * Get a translation by key
     * @param key the translation key
     * @param params an object with string replacements
     */
    get(key: keyof ITranslations, params?: ITranslationParams): string;
}
