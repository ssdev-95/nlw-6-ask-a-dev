import { Button } from '@material-ui/core';
import { ButtonProps } from "src/types"

import { buttonStyle } from '../../styles/button.styles';
export const MyButton = ({ children, callback, bgcolor }: ButtonProps) => {
    const { button } = buttonStyle();
    return (
        <Button onClick={callback} className={button} style={{backgroundColor: bgcolor}} >
            {children}
        </Button>
    )
}