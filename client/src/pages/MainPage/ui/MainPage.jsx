import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../main';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import InformationWidget from '../../../widgets/InformationWidget/ui/InformationWidget';
import {List} from '../../../widgets/List'
import cls from './MainPage.module.scss';



const MainPage = () => {
    const {user} = useContext(Context);
    const [incomeActive, setIncomeActive] = useState(true);
    const [arrayDataWithPeriod, setArrayDataWithPeriod] = useState([]);
    
    return (
        <div className={classNames(cls.MainPage, {}, [])}>
            
            <div className={classNames(cls.IncomeExpensiveMenu, {}, [])}>
                <div 
                    className={classNames(cls.Incomes, {}, [incomeActive?cls.active:''])}
                    onClick={() => setIncomeActive(incomeActive => !incomeActive)}
                >
                    Расходы
                </div>
                <div 
                    className={classNames(cls.Expensive, {}, [!incomeActive?cls.active:''])}
                    onClick={() => setIncomeActive(incomeActive => !incomeActive)}
                >
                    Доходы
                </div>
            </div>
            <InformationWidget userId={user.id} arrayDataWithPeriod={arrayDataWithPeriod} setArrayDataWithPeriod={setArrayDataWithPeriod}/>
            
            <List key={2} arrayDataWithPeriod={arrayDataWithPeriod} ></List>
           
 
        </div>
    );
};

export default MainPage;