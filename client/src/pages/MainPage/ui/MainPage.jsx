import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { Context } from '../../../main';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { getIncomesByDate } from '../../../shared/http/incomesAPI';
import dateformat from 'dateformat';
import InformationWidget from '../../../widgets/InformationWidget/ui/InformationWidget';
import {List} from '../../../widgets/List'
import { getIncomesCategoriesByDate } from '../../../shared/http/incomesAPI';
import cls from './MainPage.module.scss';



const MainPage = () => {
    const {user} = useContext(Context);
    const [incomeActive, setIncomeActive] = useState(true);
    const [periodActive, setPeriodActive] = useState('day');
    const [arrayDataWithPeriod, setArrayDataWithPeriod] = useState([]);

    useEffect(() => {
        
        const todayDate = new Date();
        const today = dateformat(todayDate, 'yyyy-mm-dd');
        let todayClone;
        let todayPlusSeven;
        let result;
        
        switch (periodActive) {
            case 'day':
                getIncomesByDate(user.id, today, today)
                    .then(data => setArrayDataWithPeriod(data))
                
                break;
            case 'week':
                
                todayClone = today;
                todayPlusSeven = todayClone.split('-');
                todayPlusSeven[2] = Number(todayClone.split('-')[2])+7;
                result = todayPlusSeven.join('-');
                
                getIncomesByDate(user.id, today, result)
                    .then(data => setArrayDataWithPeriod(data))
                    .then(data => console.log(arrayDataWithPeriod))    
             
                break;
            case 'month':

                todayClone = today;
                todayPlusSeven = todayClone.split('-');
                todayPlusSeven[1] = `0${Number(todayClone.split('-')[1])+1}`;
                result = todayPlusSeven.join('-');
                console.log(result);
                
                getIncomesByDate(user.id, today, today)
                .then(data => setArrayDataWithPeriod(data))
                .then(data => console.log(arrayDataWithPeriod))
                
                break;
            case 'year':
                
                getIncomesByDate(user.id, today, today)
                .then(data => setArrayDataWithPeriod(data))
                
                break;     
        }
   
        
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
            <InformationWidget  
                periodActive={periodActive} 
                setPeriodActive={setPeriodActive}
                arrayDataWithPeriod={arrayDataWithPeriod} 
            />
            
            <List key={2} arrayDataWithPeriod={arrayDataWithPeriod}></List>
           
 
        </div>
    );
};

export default MainPage;