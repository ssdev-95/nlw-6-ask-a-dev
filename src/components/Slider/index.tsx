/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from "src/hooks/useTheme";
import { sliderStyles } from "../../styles/slider.styles";
import colors from '../../styles/colors.json';

export const Slider = () => {
    const { toggleTheme, theme } = useTheme();
    const { sliderContainer, slider, thumb } = sliderStyles();

    const toggle = () => {
        if(theme==='light') {
            toggleTheme('dark')
        } else {
            toggleTheme('light')
        }
    }

    return (
        <div className={sliderContainer}>
            <div style={{backgroundColor: theme==='light'?colors.gray.dark:colors.purple.dark}} onClick={toggle} className={slider} >
                <span style={{
                    backgroundColor: colors.white.details,
                    left: theme==='light'?'2px':'42px'
                }} className={thumb} >.</span>
            </div>
        </ div>
    );
};