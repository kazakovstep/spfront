import {InputProps} from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';
import React, {useState} from "react";
export const Input= ({state='default',hint, label,className, ...props}:InputProps): JSX.Element=>{

    const [inputValue, setInputValue] = useState('');
    const [isFilled, setIsFilled] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleBlur = () => {
        setIsFilled(inputValue !== '');
    };
    const isDisabledEmpty = state === 'disabled-empty';
    const isDisabledFilled = state === 'disabled-filled';

    return(<>
      <label className={cn(styles.label,className,{
          [styles.label_disabled_filled]: state=='disabled-filled',
          [styles.label_disabled_empty]: state=='disabled-empty',
      })}>{label}</label>
      <input className={cn(styles.input,className,{
          [styles.default]: state=='default',
          [styles.filled]: isFilled,
          [styles.error_filled]: state=='error-filled',
          [styles.disabled_empty]: isDisabledEmpty,
          [styles.disabled_filled]: isDisabledFilled,
      })}
             value={inputValue}
             onChange={handleInputChange}
             onBlur={handleBlur}
             readOnly={isDisabledEmpty || isDisabledFilled}
             {...props}
      ></input>
        <p className={cn(styles.p,className,{
          [styles.p_default]: state=='default',
          [styles.p_focus]: state=='focus',
          [styles.p_filled]: state=='filled',
          [styles.p_error_filled]: state=='error-filled',
          [styles.p_disabled_empty]: state=='disabled-empty',
          [styles.p_disabled_filled]: state=='disabled-filled',
      })} {...props}>{hint}</p></>
    );
}