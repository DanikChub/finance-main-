import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '../../../main';
import {ErrorPage} from '../../../pages/ErrorPage';
import { notAuthRouteConfig, routeConfig } from '../../../shared/config/routeConfig/routeConfig';


const AppRouter = () => {
    const user = useContext(Context);
    return (
        <Routes>
            {user.user.isAuth && routeConfig.map(({path, element}) => (
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
            <Route path='*' element={<ErrorPage/>}/>
            
        </Routes>
    );
};

export default AppRouter;