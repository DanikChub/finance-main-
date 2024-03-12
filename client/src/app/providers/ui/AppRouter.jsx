import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '../../../main';
import {ErrorPage} from '../../../pages/ErrorPage';
import { notAuthRouteConfig, routeConfig } from '../../../shared/config/routeConfig/routeConfig';
import { MainPage } from '../../../pages/MainPage';

const AppRouter = () => {
    const user = useContext(Context);
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
            {!user.user.isAuth && notAuthRouteConfig.map(({path, element}) => (
                <Route
                    key={path}
                    element={element}
                    path={path}
                />

            ))}
            <Route path='*' element={<MainPage/>}/>
            
        </Routes>
    );
};

export default AppRouter;