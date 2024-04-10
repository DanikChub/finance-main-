import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '../../../main';
import {ErrorPage} from '../../../pages/ErrorPage';
import { notAuthRouteConfig, routeConfig } from '../../../shared/config/routeConfig/routeConfig';
import { MainPage } from '../../../pages/MainPage';
import { RegistrationPage } from '../../../pages/RegistrationPage';

const AppRouter = () => {
    const user = useContext(Context);

    useEffect(() => {
        console.log(user.user.isAuth)
    }, [])
    return (
        <Routes>
            {user.user.isAuth && 
            routeConfig.map(({path, element}) => (
                <Route
                    key={path}
                    element={element}
                    path={path}
                />
                
            ))}
            {notAuthRouteConfig.map(({path, element}) => (
                <Route
                    key={path}
                    element={element}
                    path={path}
                />

            ))}
            {!user.user.isAuth && <Route path='*' element={<RegistrationPage/>}/>}
            
        </Routes>
    );
};

export default AppRouter;