import React, {useState} from 'react';
import { useEffect } from 'react';
import { getIncomesCategoriesByDate } from '../../../shared/http/incomesAPI';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './List.module.scss'

const List = ({arrayDataWithPeriod}) => {
    const [arrayWithCategories, setArrayWithCategories] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setArrayWithCategories(arrayDataWithPeriod);
        const probArray = arrayWithCategories;
        
        arrayDataWithPeriod.forEach((incomes, i) => {
            
            getIncomesCategoriesByDate(incomes.category_id)
                .then(data => probArray[i].category_id={color: data.color,name: data.name})
                .then(data => setArrayWithCategories(probArray))
                .finally(data => setIsLoaded(true));
        })
        
    }, [])
    return ( 
        <div className={classNames(cls.List, {}, [])}>
            {
            isLoaded? 
                arrayWithCategories.map(({id, category_id, date, amount}) => 
                (
                    <div key={id} className={cls.Tr}>
                        
                        <div style={{backgroundColor: category_id.color}} className={cls.Td}>{category_id.name}</div>
                        <div className={cls.Td}>{date}</div>
                        <div className={cls.Td}>{amount}</div>
                    </div>
                ))
                :
                <div>Loading...</div>
            }
            
        </div>
    );
};

export default List;