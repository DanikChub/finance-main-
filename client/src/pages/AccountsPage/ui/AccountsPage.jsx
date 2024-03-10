import React, { useState } from 'react';
import { useEffect } from 'react';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './AccountsPage.module.scss'


const arrayData=[
    {id:1, name: 'tinkof', amount: 16589},
    {id:2, name: 'sberbank', amount: 30567},
    {id:3, name: 'alfabank', amount: 56781},
    {id:4, name: 'ozonbank', amount: 1345},
]
const AccountsPage = () => {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        calcAmount(arrayData);
    }, [])

    const calcAmount = (arrayData) => {
        let count = 0;
        for (let i = 0; i < arrayData.length; i++) {
            count+=arrayData[i].amount;
            
        }
        setAmount(count);
    }

    return (
        <div className={classNames(cls.AccountsPage, {}, [])}>
            <h3>Итого: </h3>
            <h1>{amount}$</h1>
            <div className={classNames(cls.List, {}, [])}>
                {arrayData.map(({id, name, amount}) => (
                    <div key={id} className={cls.Tr}>

                        <div className={cls.Td}>{name}</div>
                        <div className={cls.Td}>{amount}$</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccountsPage;