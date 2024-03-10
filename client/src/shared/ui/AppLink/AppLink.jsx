import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../lib/classNames/classNames';
import cls from './AppLink.module.scss';

export const AppLink = (props) => {
    const {
        children, 
        className, 
        to, 
        onClick,
        ...otherProps
    } = props;

    return (
        <div onClick={onClick} className={classNames(cls.AppLink, {}, [className])}>
            <Link 
                to={to} 
                {...otherProps}
            >
                {children}
            </Link>
        </div>
        
    );
};
