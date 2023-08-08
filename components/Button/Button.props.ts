import {ReactNode} from "react";

export interface ButtonProps {
    state:'default'|'hover'|'click'|'disabled';
    type?: 'primary'|'secondary'
    icon?: string;
    children?: ReactNode;
}