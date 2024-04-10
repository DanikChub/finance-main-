import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import {classNames} from '../../../shared/lib/classNames/classNames';
import {Context } from '../../../main';
import cls from './MakeAccountPage.module.scss';
import Input from '../../../shared/ui/Input/Input';
import { ACCOUNTS_ROUTE, MAIN_ROUTE } from '../../../shared/utils/consts/consts';
import Button from '../../../shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../../../shared/http/accountsAPI';


const MakeAccountPage = () => {
    const {user} = useContext(Context);
    const [nameInput, setNameInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [colorInput, setColorInput] = useState();


    const navigate = useNavigate();
    

    
    const click = async (e) => {
        e.preventDefault();

        try {
            data = await createAccount(user.id, nameInput, amountInput, "no.jpg", colorInput)
                .then(data => navigate(ACCOUNTS_ROUTE))
           
        } catch (e) {
            console.log(e);
        }
        
    }

    return (
        
        <form className={classNames(cls.Form, {}, [])}>
            <Input className={classNames(cls.Input, {}, [])}  type="text" placeholder='название' value={nameInput} setInnerValue={setNameInput}/>
            <Input className={classNames(cls.Input, {}, [])}  type="text" placeholder='количество' value={amountInput} setInnerValue={setAmountInput}/>
            <Input className={classNames(cls.Input, {}, [])}  type="color" placeholder='цвет' value={colorInput} setInnerValue={setColorInput}/>
            
            <Button className={classNames(cls.Button, {}, [])} type="submit" onClick={click}>Сохранить</Button>
        
        </form>
        
    
    );
};

export default MakeAccountPage;