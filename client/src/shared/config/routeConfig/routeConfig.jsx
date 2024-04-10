import { MainPage } from "../../../pages/MainPage";
import { AccountsPage } from "../../../pages/AccountsPage";
import { GraficsPage } from "../../../pages/GraficsPage";
import { CategoriesPage } from "../../../pages/CategoriesPage";
import { LoginPage } from "../../../pages/LoginPage";
import { UserPage } from "../../../pages/UserPage";
import {RegistrationPage} from "../../../pages/RegistrationPage";
import {MAIN_ROUTE, MAKE_CATEGORY_ROUTE, ACCOUNTS_ROUTE, GRAFICS_ROUTE, CATEGORIES_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE, MAKE_INCOME_ROUTE, INCOMES_ROUTE, MAKE_ACCOUNT_ROUTE} from '../../../shared/utils/consts/consts'
import { MakeIncome } from "../../../pages/MakeIncome";
import { MakeCategoriesPage } from "../../../pages/MakeCategoriesPage.jsx";
import IncomesPage from "../../../pages/IncomesPage/ui/IncomesPage.jsx";
import { MakeAccountPage } from "../../../pages/MakeAccountPage";


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
    },
    {
        path: MAKE_INCOME_ROUTE,
        element: <MakeIncome/>
    }
    ,
    {
        path: MAKE_CATEGORY_ROUTE,
        element: <MakeCategoriesPage/>
    }
    ,
    {
        path: INCOMES_ROUTE + '/:id',
        element: <IncomesPage/>
    }
    ,
    {
        path: INCOMES_ROUTE + '/:id',
        element: <IncomesPage/>
    }
    ,
    {
        path: MAKE_ACCOUNT_ROUTE,
        element: <MakeAccountPage/>
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