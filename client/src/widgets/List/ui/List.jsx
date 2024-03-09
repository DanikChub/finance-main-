import React from 'react';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './List.module.scss'

const List = ({arrayDataWithPeriod}) => {
    return (
        <div className={classNames(cls.List, {}, [])}>
            {arrayDataWithPeriod.map(({id, category, date, amount}) => 
            (
                <div key={id} className={cls.Tr}>
                    
                    <div className={cls.Td}>{category}</div>
                    <div className={cls.Td}>{date}</div>
                    <div className={cls.Td}>{amount}</div>
                </div>
            ))}
        </div>
    );
};

export default List;