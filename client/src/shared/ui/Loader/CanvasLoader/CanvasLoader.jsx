import React from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './CanvasLoader.module.scss';

const CanvasLoader = () => {
    return (
       
        <img className={classNames(cls.CanvasLoader, {}, [])} width="100" height="100" src="https://img.icons8.com/ios/100/spinning-circle--v1.png" alt="spinning-circle--v1"/>
      
    );
};

export default CanvasLoader;