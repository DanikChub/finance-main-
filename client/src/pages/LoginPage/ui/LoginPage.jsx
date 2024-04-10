import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../main';
import {login, getUserById} from '../../../shared/http/userAPI';
import { classNames } from '../../../shared/lib/classNames/classNames';
import Input from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';
import { MAIN_ROUTE } from '../../../shared/utils/consts/consts';
import cls from './LoginPage.module.scss'

const LoginPage = () => {
    const {user} = useContext(Context);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const navigate = useNavigate();

    const click = async (e) => {
        e.preventDefault();

        try {
            let data;
            
            data = await login(emailInput, passwordInput);
            
            await getUserById(data.id)
                .then((data) => user.setUser(data))
                .then((data) => user.setIsAuth(true))
                .catch((e) => console.log(e))
                .finally((data) => navigate(MAIN_ROUTE))

           
        } catch (e) {
            console.log(e);
        }
        
    }
    return (
        <form className={classNames(cls.Form, {}, [])}>
            <Input className={classNames(cls.Input, {}, [])}   type="text" placeholder='email' value={emailInput} setInnerValue={setEmailInput }/>
            <Input className={classNames(cls.Input, {}, [])}  type="text" placeholder='Пароль' value={passwordInput} setInnerValue={setPasswordInput}/>
            <Button className={classNames(cls.Button, {}, [])} type="submit" onClick={click}>Войти</Button>
        </form>
    );
};

export default LoginPage;