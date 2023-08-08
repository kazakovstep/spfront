import {ReactNode} from "react";

export interface HtagProps{
    type:'h1'|'h2'|'h3'|'body';
    children: ReactNode;
}