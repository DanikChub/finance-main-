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


const MakeIncome = () => {
    const {user} = useContext(Context);
    const [categoryIdInput, setCategoryIdInput] = useState(1);
    const [amountInput, setAmountInput] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        setIsLoaded(false);
        getIncomesCategories()
            .then(data => setCategories(data))
            .then(data => setIsLoaded(true))
    }, [])
    const handleChange = (e) => {
        
        setCategoryIdInput(e.target.value);
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
                <select className={classNames(cls.Select, {}, [])}  defaultValue={categoryIdInput} onChange={handleChange}>
                    {categories.map(category => (
                        <option className={classNames(cls.Option, {}, [])}  key={category.id} style={{backgroundColor: category.color}} value={category.id}>{category.name}</option>
                    ))}
                </select>
                
                <Button className={classNames(cls.Button, {}, [])} type="submit" onClick={click}>Сохранить</Button>
            
            </form>
        }
        </>
    
    );
};

export default MakeIncome;