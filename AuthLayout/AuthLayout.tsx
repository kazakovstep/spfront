import {AuthLayoutProps} from "./AuthLayout.props";
import {FunctionComponent} from "react";
import styles from "./AuthLayout.module.css";
import {AuthFooter} from "./Footer/Footer";

const AuthLayout = ({children}:AuthLayoutProps):JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <header className={styles.header}/>
                <div className={styles.body}>
                    {children}
                </div>
            <AuthFooter/>
        </div>
    );
};


export const withAuthLayout = <T extends Record<string, unknown>>(Component:FunctionComponent<T>) => {
    return function withAuthLayoutComponent(props:T):JSX.Element {
        return(
            <AuthLayout>
                <Component {...props}/>
            </AuthLayout>
        );
    };
};
