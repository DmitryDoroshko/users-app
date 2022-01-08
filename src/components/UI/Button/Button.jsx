import React from 'react';

const Button = props => {
    const {type, className, children, onButtonClick} = props;

    return <button type={type} className={`btn ${className}`} onClick={onButtonClick}>{children}</button>;
};

export default Button;