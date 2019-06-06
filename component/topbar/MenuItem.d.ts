import React from "react";
type ChildrenFn = (requestClose: () => void) => React.ReactNode;

interface IMenuItemProps {
    title: string;
    children: React.ReactNode | ChildrenFn;
    sticky?: boolean;
}

export class MenuItem extends React.Component<IMenuItemProps> {
}
