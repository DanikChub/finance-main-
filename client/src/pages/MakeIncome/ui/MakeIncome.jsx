import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import {classNames} from '../../../shared/lib/classNames/classNames';
import {Context } from '../../../main';
import {createIncome, getIncomesCategories} from '../../../shared/http/incomesAPI';
import cls from './MakeIncome.module.scss';
import Input from '../../../shared/ui/Input/Input';
import { MAIN_ROUTE } from '../../../shared/utils/consts/consts';
import Button from '../../../shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { getAccounts } from '../../../shared/http/accountsAPI';


const MakeIncome = () => {
    const {user} = useContext(Context);
    const [categoryIdInput, setCategoryIdInput] = useState(1);
    const [accountIdInput, setAccountIdInput] = useState([]);
    const [amountInput, setAmountInput] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const [isAccountsLoaded, setIsAccountsLoaded] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        if (isAccountsLoaded && isCategoriesLoaded) {
            setIsLoaded(true);
        } else {
            setIsLoaded(false);
        }
    }, [isAccountsLoaded, isCategoriesLoaded])
    useEffect(() => {
        setIsCategoriesLoaded(false)
        setIsAccountsLoaded(false)
        getIncomesCategories()
            .then(data => setCategories(data))
            .then(data => setIsCategoriesLoaded(true))
        getAccounts()
            .then(data => setAccounts(data))
            .then(data => setIsAccountsLoaded(true))
    }, [])

    const handleCategoryChange = (e) => {
        
        setCategoryIdInput(e.target.value);
    }

    const handleAccountChange = (e) => {
        
        setAccountIdInput(e.target.value);
    }

    const click = async (e) => {
        e.preventDefault();
        console.log(categoryIdInput)
        try {
            let data;
            let date = new Date();
            
            data = await createIncome(user.id, categoryIdInput, date, amountInput)
                .then(data => navigate(MAIN_ROUTE))
            
           
        } catch (e) {
            console.log(e);
        }
        
    }

    return (
        <>
        { isLoaded &&
            <form className={classNames(cls.Form, {}, [])}>
                <Input className={classNames(cls.Input, {}, [])}  type="text" placeholder='количество' value={amountInput} setInnerValue={setAmountInput}/>
                <select className={classNames(cls.Select, {}, [])}  defaultValue={categoryIdInput} onChange={handleCategoryChange}>
                    {categories.map(category => (
                        <option className={classNames(cls.Option, {}, [])}  key={category.id} style={{backgroundColor: category.color}} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <select className={classNames(cls.Select, {}, [])}  defaultValue={accountIdInput} onChange={handleAccountChange}>
                    {accounts.map(account => (
                        <option className={classNames(cls.Option, {}, [])}  key={account.id} style={{backgroundColor: account.color}} value={account.id}>{account.name}</option>
                    ))}
                </select>
                
                <Button className={classNames(cls.Button, {}, [])} type="submit" onClick={click}>Сохранить</Button>
            
            </form>
        }
        </>
    
    );
};

export default MakeIncome;