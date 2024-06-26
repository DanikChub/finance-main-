import React, {useState, useEffect, Suspense} from 'react';
import { Canvas } from '../../../features/Canvas';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './InformationWidget.module.scss'
import { useNavigate } from 'react-router-dom';




const InformationWidget = ({periodActive, setPeriodActive, arrayDataWithPeriod, isLoaded, setIsLoaded}) => {
    
    const navigate = useNavigate();

    

    return (
        <div className={classNames(cls.InformationWidget, {}, [])}>
            <div className={classNames(cls.Period, {}, [])}>
                <div onClick={() => setPeriodActive('day')} className={classNames(cls.PeriodChildren, {}, [periodActive=='day'?cls.periodActive:''])}>День</div>
                <div onClick={() => setPeriodActive('week')}  className={classNames(cls.PeriodChildren, {}, [periodActive=='week'?cls.periodActive:''])}>Неделя</div>
                <div onClick={() => setPeriodActive('month')}  className={classNames(cls.PeriodChildren, {}, [periodActive=='month'?cls.periodActive:''])}>Месяц</div>
                <div onClick={() => setPeriodActive('year')}  className={classNames(cls.PeriodChildren, {}, [periodActive=='year'?cls.periodActive:''])}>Год</div>
            </div>
            
            <Canvas isLoaded={isLoaded} setIsLoaded={setIsLoaded} canvasHeight={220} canvasWidth={310} periodActive={periodActive} arrayDataWithPeriod={arrayDataWithPeriod}/>
                
            <div onClick={() => navigate('/make_income')} className={classNames(cls.Button, {}, [])}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 128 128">
                    <path d="M 64 6.0507812 C 49.15 6.0507812 34.3 11.7 23 23 C 0.4 45.6 0.4 82.4 23 105 C 34.3 116.3 49.2 122 64 122 C 78.8 122 93.7 116.3 105 105 C 127.6 82.4 127.6 45.6 105 23 C 93.7 11.7 78.85 6.0507812 64 6.0507812 z M 64 12 C 77.3 12 90.600781 17.099219 100.80078 27.199219 C 121.00078 47.499219 121.00078 80.500781 100.80078 100.80078 C 80.500781 121.10078 47.500781 121.10078 27.300781 100.80078 C 7.0007813 80.500781 6.9992188 47.499219 27.199219 27.199219 C 37.399219 17.099219 50.7 12 64 12 z M 64 42 C 62.3 42 61 43.3 61 45 L 61 61 L 45 61 C 43.3 61 42 62.3 42 64 C 42 65.7 43.3 67 45 67 L 61 67 L 61 83 C 61 84.7 62.3 86 64 86 C 65.7 86 67 84.7 67 83 L 67 67 L 83 67 C 84.7 67 86 65.7 86 64 C 86 62.3 84.7 61 83 61 L 67 61 L 67 45 C 67 43.3 65.7 42 64 42 z"></path>
                </svg>
            </div>
        </div>
         
        
    );
};

export default InformationWidget;