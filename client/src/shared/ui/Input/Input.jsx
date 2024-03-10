import React, { useState, useEffect } from 'react';
import { classNames } from '../../lib/classNames/classNames';


import './Input.scss'

const Input = (props) => {
    const {type, 
            placeholder, 
            setInnerValue, 
            firstValue = '', 
            className,
            ...otherProps} = props;
    const [value, setValue] = useState(firstValue);

    useEffect(() => {
        setInnerValue(value)
    }, [value])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={classNames('input', {}, [className])} {...otherProps}>
            <input className='input__inner' value={value} onChange={handleChange} type={type} placeholder={placeholder} />
        </div>
        
    );
};

export default Input;