import React, { useContext } from 'react';
import { useState } from 'react';
import {classNames} from '../../../shared/lib/classNames/classNames';
import {Context } from '../../../main';
import {registration, getUserById} from '../../../shared/http/userAPI';
import cls from './RegistrationPage.module.scss';
import Input from '../../../shared/ui/Input/Input';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../../../shared/utils/consts/consts';
import Button from '../../../shared/ui/Button/Button';
import { useNavigate, Link } from 'react-router-dom';


const RegistrationPage = () => {
    const {user} = useContext(Context);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const navigate = useNavigate();

    const click = async (e) => {
        e.preventDefault();

        try {
            let data;
            
            data = await registration(emailInput, passwordInput, nameInput);
            
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
            <Input className={classNames(cls.Input, {}, [])}  type="text" placeholder='Имя' value={nameInput} setInnerValue={setNameInput}/>
            <Input className={classNames(cls.Input, {}, [])}   type="text" placeholder='email' value={emailInput} setInnerValue={setEmailInput }/>
            <Input className={classNames(cls.Input, {}, [])}  type="text" placeholder='Пароль' value={passwordInput} setInnerValue={setPasswordInput}/>
            <Button className={classNames(cls.Button, {}, [])} type="submit" onClick={click}>Зарегистрироваться</Button>
            <Link to={LOGIN_ROUTE}>Войти</Link>
        </form>
    );
};

export default RegistrationPage;