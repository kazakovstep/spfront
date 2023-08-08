import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    state: 'default'|'focus'|'filled'|'error-filled'|'disabled-empty'|'disabled-filled';
    label?: string;
    hint?: string;
}