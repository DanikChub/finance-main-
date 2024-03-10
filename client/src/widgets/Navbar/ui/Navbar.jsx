import React from 'react';
import { useContext } from 'react';
import { Context } from '../../../main';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import { ACCOUNTS_ROUTE, CATEGORIES_ROUTE, GRAFICS_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE } from '../../../shared/utils/consts/consts';

import cls from './Navbar.module.scss'

const Navbar = ({active, setActive, user}) => {
    
    
    return (
        <div className={classNames(cls.Navbar, {}, [active?cls.active:''])}>
            {
                user.isAuth
                ? 
                <AppLink 
                    onClick={() => setActive(false)}
                    className={classNames(cls.Link, {}, [])} 
                    to={USER_ROUTE}
                >
                    {user.user.data[0].email}
                </AppLink>
                :
                <AppLink 
                    onClick={() => setActive(false)}
                    className={classNames(cls.Link, {}, [])} 
                    to={REGISTRATION_ROUTE}
                >
                    Регистрация
                </AppLink>
            }
            <AppLink 
                onClick={() => setActive(false)}
                className={classNames(cls.Link, {}, [])} 
                to={MAIN_ROUTE}
            >
                    Главная
            </AppLink>
            <AppLink 
                onClick={() => setActive(false)}
                className={classNames(cls.Link, {}, [])} 
                to={ACCOUNTS_ROUTE} 
            >
                Счета
            </AppLink>
            <AppLink 
                onClick={() => setActive(false)}
                className={classNames(cls.Link, {}, [])} 
                to={GRAFICS_ROUTE} 
            >
                Графики
            </AppLink>
            <AppLink 
                onClick={() => setActive(false)}
                className={classNames(cls.Link, {}, [])} 
                to={CATEGORIES_ROUTE}
            >
                Категории
            </AppLink>
            
        </div>
    );
};

export default Navbar;