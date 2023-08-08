import {FooterProps} from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";
import {H} from "../../components/Htag/Htag";
import Logo from "./Logotype.svg"
export const AuthFooter = ({className,...props}:FooterProps):JSX.Element=>{
    return(
        <footer className={cn(styles.footer,className)}>
            <Logo className={cn(styles.logo,className)}/>
            <div className={cn(styles.left,className)}>
                <H type={"h3"}>Премиум</H>
                <H type={"h3"}>Ведение сделки</H>
                <H type={"h3"}>Блог</H>
            </div>
            <H type={"body"}>© ООО «Сайдпроджектс» 2023</H>
        </footer>
    );
};