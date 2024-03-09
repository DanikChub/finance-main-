import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import Canvas from '../../../widgets/Canvas/ui/Canvas';
import {List} from '../../../widgets/List'
import cls from './MainPage.module.scss';

const arrayData = [
    {id: 1, date: '01.02.2024', amount: 100, category: 'Еда', account: 'tinkof'},
    {id: 1, date: '01.02.2024', amount: 195, category: 'Еда', account: 'tinkof'},
    {id: 1, date: '01.02.2024', amount: 256, category: 'Еда', account: 'tinkof'},
    {id: 1, date: '01.02.2024', amount: 145, category: 'Еда', account: 'tinkof'},
    {id: 2, date: '02.02.2024', amount: 300, category: 'Еда', account: 'tinkof'},
    {id: 3, date: '03.02.2024', amount: 100, category: 'Еда', account: 'tinkof'},
    {id: 4, date: '04.02.2024', amount: 300, category: 'Еда', account: 'tinkof'},
    {id: 5, date: '05.02.2024', amount: 300, category: 'Еда', account: 'tinkof'},
    {id: 6, date: '06.02.2024', amount: 100, category: 'Еда', account: 'tinkof'},
    {id: 7, date: '07.02.2024', amount: 300, category: 'Еда', account: 'tinkof'},
    {id: 8, date: '08.02.2024', amount: 300, category: 'Еда', account: 'tinkof'},
    {id: 9, date: '09.04.2024', amount: 300, category: 'Еда', account: 'tinkof'},
]
let count = 0;
for (let i = 0; i < arrayData.length; i++) {
    count +=arrayData[i].amount;
}

const MainPage = () => {
    const [incomeActive, setIncomeActive] = useState(true);
    const [periodActive, setPeriodActive] = useState('day');
    const [arrayDataWithPeriod, setArrayDataWithPeriod] = useState([]);

    useEffect(() => {
        let newArrayData = [];
        switch (periodActive) {
            case 'day':
                newArrayData = arrayData.filter((income) => income.date == '01.02.2024');
                break;
            case 'week':
                newArrayData = arrayData.filter((income) => income.id < 8);
                break;
            case 'month':
                newArrayData = arrayData.filter((income) => income.id < 9);
                break;
            case 'year':
                newArrayData = arrayData;
                break;
            
        }
        setArrayDataWithPeriod(newArrayData);
    }, [periodActive])
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
            
            <div className={classNames(cls.InformationWidget, {}, [])}>
                <div className={classNames(cls.Period, {}, [])}>
                    <div onClick={() => setPeriodActive('day')} className={classNames(cls.PeriodChildren, {}, [periodActive=='day'?cls.periodActive:''])}>День</div>
                    <div onClick={() => setPeriodActive('week')}  className={classNames(cls.PeriodChildren, {}, [periodActive=='week'?cls.periodActive:''])}>Неделя</div>
                    <div onClick={() => setPeriodActive('month')}  className={classNames(cls.PeriodChildren, {}, [periodActive=='month'?cls.periodActive:''])}>Месяц</div>
                    <div onClick={() => setPeriodActive('year')}  className={classNames(cls.PeriodChildren, {}, [periodActive=='year'?cls.periodActive:''])}>Год</div>
                </div>
                <Canvas key={1} canvasHeight={220} canvasWidth={310} arrayDataWithPeriod={arrayDataWithPeriod}/>
            </div>
            <List key={2} arrayDataWithPeriod={arrayDataWithPeriod} ></List>
        </div>
    );
};

export default MainPage;