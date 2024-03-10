import { MainPage } from "../../../pages/MainPage";
import { AccountsPage } from "../../../pages/AccountsPage";
import { GraficsPage } from "../../../pages/GraficsPage";
import { CategoriesPage } from "../../../pages/CategoriesPage";
import { LoginPage } from "../../../pages/LoginPage";
import { UserPage } from "../../../pages/UserPage";
import {RegistrationPage} from "../../../pages/RegistrationPage";
import {MAIN_ROUTE, ACCOUNTS_ROUTE, GRAFICS_ROUTE, CATEGORIES_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE} from '../../../shared/utils/consts/consts'


export const routeConfig = [
    {
        path: MAIN_ROUTE,
        element: <MainPage/>
    },
    {
        path: ACCOUNTS_ROUTE,
        element: <AccountsPage/>
    },
    {
        path: GRAFICS_ROUTE,
        element: <GraficsPage/>
    },
    {
        path: CATEGORIES_ROUTE,
        element: <CategoriesPage/>
    },
    {
        path: USER_ROUTE,
        element: <UserPage/>
    }
]

export const notAuthRouteConfig = [
    {
        path: LOGIN_ROUTE,
        element: <LoginPage/>
    },

    {
        path: REGISTRATION_ROUTE,
        element: <RegistrationPage/>
    },
]