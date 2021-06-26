/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, ChangeEvent } from "react";
import { useTheme } from "src/hooks/useTheme";
import { sliderStyles } from "../../styles/slider.styles";
import colors from '../../styles/colors.json';

export const Slider = () => {
    const { toggleTheme, theme } = useTheme();
    const { sliderContainer, slider, switcher, thumb } = sliderStyles();

    const toggle = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if(isChecked) {
            toggleTheme('dark')
        } else {
            toggleTheme('light')
        }
    }

    return (
        <div className={sliderContainer}>
            <label style={{background: theme==='light'?colors.purple.light:colors.purple.dark}} className={slider} htmlFor="switch">
                <input
                  type="checkbox"
                  className={switcher}
                  id="switch"
                  name="switch"
                  onChange={toggle}
                />
                <div style={{left: theme==='light'?'2px':'1.75rem'}} className={thumb} />
            </label>
        </ div>
    );
};