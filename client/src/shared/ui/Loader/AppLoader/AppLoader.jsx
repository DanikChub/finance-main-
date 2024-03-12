import React from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './AppLoader.module.scss';

const AppLoader = () => {
    return (
        <div className={classNames(cls.AppLoader, {}, [])}>
            
        </div>
    );
};

export default AppLoader;