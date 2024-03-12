import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { classNames } from '../../lib/classNames/classNames';
import cls from './AppLink.module.scss';

export const AppLink = (props) => {
    const navigate = useNavigate();
    const {
        children, 
        className, 
        onClick,
        to, 
        ...otherProps
    } = props;

    const handleClick = () => {
        onClick();
        navigate(to);
    }

    return (
        <div 
            onClick={handleClick} 
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps}
        >     
            {children}
        </div>
        
    );
};
