import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from '../../../pages/MainPage';
import { routeConfig } from '../../../shared/config/routeConfig/routeConfig';
import { ACCOUNTS_ROUTE } from '../../../shared/utils/consts/consts';

const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({path, element}) => (
                <Route
                    key={path}
                    element={element}
                    path={path}
                />

            ))}
            
        </Routes>
    );
};

export default AppRouter;