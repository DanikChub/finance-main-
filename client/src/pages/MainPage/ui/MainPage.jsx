import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { Context } from '../../../main';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { getIncomesByDate } from '../../../shared/http/incomesAPI';
import dateformat from 'dateformat';
import InformationWidget from '../../../widgets/InformationWidget/ui/InformationWidget';
import {List} from '../../../widgets/List'
import { getIncomesCategoriesByDate } from '../../../shared/http/incomesAPI';
import MainPageSceleton from '../../../shared/ui/Loader/MainPageSceleton/MainPageSceleton'
import { getWeek, getDay } from '../hooks/useDate';
import cls from './MainPage.module.scss';



const MainPage = () => {
    const {user} = useContext(Context);
    const [incomeActive, setIncomeActive] = useState(true);
    const [periodActive, setPeriodActive] = useState('day');
    const [arrayDataWithPeriod, setArrayDataWithPeriod] = useState([]);
    const [today, setToday] = useState(new Date);
    const [isLoaded, setIsLoaded] = useState(false);
    const [informationWidgetLoaded, setInformationWidgetLoaded] = useState(false);
    const [listLoaded, setListLoaded] = useState(false);
    

    useEffect(() => {
        
        setIsLoaded(false);
        let todayClone;
        let todayMinusSeven;
        let result;
        
        switch (periodActive) {
            case 'day':
                getIncomesByDate(user.id, getDay(today), getDay(today))
                    .then(data => setArrayDataWithPeriod(data))
                    .then(data => setIsLoaded(true))
                
                break;
            case 'week':
                
                
                
                getIncomesByDate(user.id, getWeek(today).from, getWeek(today).to)
                    .then(data => setArrayDataWithPeriod(data))
                    .then(data => setIsLoaded(true))
             
                break;
            case 'month':

                todayClone = today;
                todayMinusSeven = todayClone.split('-');
                todayMinusSeven[1] = `0${Number(todayClone.split('-')[1])+1}`;
                result = todayMinusSeven.join('-');
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
   
        
    }, [periodActive, today])

   
    
    return (
        <div className={classNames(cls.MainPage, {}, [])}>
            {isLoaded ?
                <>
                       
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
                        isLoaded={informationWidgetLoaded} 
                        setIsLoaded={setInformationWidgetLoaded}
                        periodActive={periodActive} 
                        setPeriodActive={setPeriodActive}
                        arrayDataWithPeriod={arrayDataWithPeriod} 
                    />
                    
                    <List isLoaded={listLoaded} setIsLoaded={setListLoaded} arrayDataWithPeriod={arrayDataWithPeriod}></List>
                
                </>
                :
                <MainPageSceleton/>

            }
       </div>
    );
};

export default MainPage;