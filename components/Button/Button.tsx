import {ButtonProps} from "./Button.props";
import styles from './Button.module.css';
import cn from "classnames";
import {useState} from "react";
import Plus from "./plus.svg"
export const Button=({type,state,icon,children, ...props}:ButtonProps): JSX.Element=>{
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (state === 'disabled') {
      return;
    }
    setIsClicked(true);
  };

    return(
        <button className={cn(styles.button,{
          [styles.default]: state=='default',
          [styles.click]: state=='click',
          [styles.disabled]: state=='disabled',
            'disabled primary': state === 'disabled' && type === 'primary',
            'disabled secondary': state === 'disabled' && type === 'secondary',
          [styles.primary]: type=='primary',
          [styles.secondary]: type=='secondary',
      })}
                onClick={handleClick}
                {...props}>
      <Plus/>{children}
      </button>
    );
}