import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import {classNames} from '../../../shared/lib/classNames/classNames';
import {Context } from '../../../main';
import {createIncome, getIncomesByCategoryId} from '../../../shared/http/incomesAPI';
import cls from './IncomesPage.module.scss';
import dateformat from 'dateformat';

import { useNavigate, useParams } from 'react-router-dom';


const IncomesPage = () => {
    const {user} = useContext(Context);
    const params = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [incomes, setIncomes] = useState([]);
    
    useEffect(() => {
        setIsLoaded(false);
        const date = dateformat(new Date(), 'yyyy.mm.dd')
        getIncomesByCategoryId(user.id, params.id, date, date)
            .then(data => setIncomes(data))
            .then(data => setIsLoaded(true))
    }, [])
    


    return (
        <>
        { isLoaded &&
            <div>
                {incomes.map(income => (
                    <div key={income.id}>
                        <span>{income.amount}</span>
                        <span>{income.date}</span>
                    </div>
                    
                ))}
            </div>
        }
        </>
    
    );
};

export default IncomesPage;