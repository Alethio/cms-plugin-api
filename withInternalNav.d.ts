import React from "react";

export interface IInternalNav {
    /** Returns true if the pageUri was resolved and the navigation was successful, or false otherwise */
    goTo(pageUri: string): boolean;
    /** Resolves a page URI to a real URL */
    resolve(pageUri: string): string | false;
}

export const withInternalNav: <P extends { internalNav?: IInternalNav }>(C: React.ComponentType<P>) =>
    React.ComponentType<Pick<P, Exclude<keyof P, "internalNav">>>;
