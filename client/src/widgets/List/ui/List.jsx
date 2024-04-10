import React, {useState} from 'react';
import { useEffect } from 'react';
import { getIncomesCategoriesByDate } from '../../../shared/http/incomesAPI';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './List.module.scss'
import { useNavigate } from 'react-router-dom';
import { INCOMES_ROUTE } from '../../../shared/utils/consts/consts';

const List = ({arrayDataWithPeriod, isLoaded, setIsLoaded}) => {
  
    const [arrayWithCategory, setArrayWithCategory] = useState(arrayDataWithPeriod);
    const [categoryArray, setCategoryArray] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        
        const probArray = arrayWithCategory;
        arrayWithCategory.forEach((income, i) => { 
            categoryArray.forEach((category, j) => {   
                if (income.category_id == category.id) {
                    probArray[i].category = category;
                }
            })
            
        })
        setArrayWithCategory(probArray)
        setIsLoaded(true)
    }, [categoryArray])
    useEffect(() => {
        setIsLoaded(false);
        
        const arrayId = [];
        
        arrayWithCategory.forEach((income, i) => {
            arrayId.push(income.category_id);
        })
        getIncomesCategoriesByDate(arrayId)
            .then(data => {
                setCategoryArray(data)
            })
            
            
        
    }, [arrayDataWithPeriod])

   
    return ( 
        <div className={classNames(cls.List, {}, [])}>
            {
            isLoaded? 
                arrayWithCategory.map(({id, date, amount, category}) => 
                (
                    <div onClick={() => navigate(`${INCOMES_ROUTE}/${category.id}`)} key={id} className={cls.Tr}>
                        
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