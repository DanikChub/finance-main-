import React, {useState} from 'react';
import { useEffect } from 'react';
import { getIncomesCategoriesByDate } from '../../../shared/http/incomesAPI';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './List.module.scss'

const List = ({arrayDataWithPeriod}) => {
  
    const [isLoaded, setIsLoaded] = useState(false);
    const [arrayWithCategory, setArrayWithCategory] = useState([]);
    useEffect(() => {
        setIsLoaded(false);
        setArrayWithCategory(arrayDataWithPeriod);
        let probArray = arrayWithCategory;
        
        arrayDataWithPeriod.forEach((income, i) => {
            getIncomesCategoriesByDate(income.category_id)
                .then(data => {
                    probArray[i].category = data;
                    setArrayWithCategory(probArray)
                })
                
                
        })
        setTimeout(() => {
            setIsLoaded(true);
        }, 0)
        
    }, [arrayDataWithPeriod])

   
    return ( 
        <div className={classNames(cls.List, {}, [])}>
            {
            isLoaded? 
                arrayWithCategory.map(({id, date, amount, category}) => 
                (
                    <div key={id} className={cls.Tr}>
                        
                        <div style={{backgroundColor: category.color}} className={cls.Td}>{category.name}</div>
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