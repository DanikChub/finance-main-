import React from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

const Button = (props) => {
    const {
        children,
        className,
        ...otherProps
    } = props;
    return (
        <div className={classNames(cls.Button, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
};

export default Button;