import React from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Buttons = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,

}
) => {
    // check the style of the coming style
    const checkButtonStyle = STYLES.includes(buttonStyle)
                             ? buttonStyle : STYLES[0];
    

}