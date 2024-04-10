import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { classNames } from '../../../shared/lib/classNames/classNames';
import Input from '../../../shared/ui/Input/Input'
import Button from '../../../shared/ui/Button/Button'
import cls from './MakeCategoriesPage.module.scss'
import { CATEGORIES_ROUTE } from '../../../shared/utils/consts/consts';
import { createIncomesCategory } from '../../../shared/http/incomesAPI'

const MakeCategoriesPage = () => {
    const [nameInput, setNameInput] = useState('');
    const [colorInput, setColorInput] = useState();
    const navigate = useNavigate();

    const click = async (e) => {
        
        try {
            
            data = await createIncomesCategory(nameInput, colorInput)
                .then(data => navigate(CATEGORIES_ROUTE))
            
           
        } catch (e) {
            console.log(e);
        }
        
    }

    return (
        <form className={classNames(cls.Form, {}, [])}>
            <Input className={classNames(cls.Input, {}, [])}   type="text" placeholder='название категории' value={nameInput} setInnerValue={setNameInput }/>
            <Input className={classNames(cls.Input, {}, [])}  type="color" placeholder='цвет' value={colorInput} setInnerValue={setColorInput}/>
            
            <Button className={classNames(cls.Button, {}, [])} type="submit" onClick={click}>Сохранить</Button>
           
        </form>
    );
};

export default MakeCategoriesPage;