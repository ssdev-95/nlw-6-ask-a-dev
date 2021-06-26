/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonHTMLAttributes } from 'react';
import { Button } from '@material-ui/core';
import { buttonStyle } from '../../styles/button.styles';

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export const MyButton = ({ isOutlined=false, children, ...props }: IButton) => {
    const { button } = buttonStyle();
    return (
        <button
          className={`${button} ${isOutlined ? 'outlined' : ''}`}
          { ...props }
        >{ children }</button>
    )
}