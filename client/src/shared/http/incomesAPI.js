import { $host, $authHost} from "./index";


export const getIncomesByDate = async (id, fromDate, toDate) => {
    const {data} = await $authHost.get(`api/income?id=${id}&from=${fromDate}&to=${toDate}`);
    
    return data;
}

export const getIncomesByCategoryId = async (id, category_id, fromDate, toDate) => {
    const {data} = await $authHost.get(`api/income/get_by_category_id?id=${id}&category_id=${category_id}&from=${fromDate}&to=${toDate}`);
    
    return data;
}

export const createIncome = async (user_id, category_id, date, amount) => {
    const {data} = await $authHost.post(`api/income/create`, {user_id, category_id, date, amount});
    
    return data;
}

export const getIncomesCategoriesByDate = async (arrayId) => {
    const json = JSON.stringify(arrayId)
   
    const {data} = await $authHost.get(`api/income_category/with_parametr?array_id=${json}`);
    
    return data;
}

export const getIncomesCategories = async () => {
    const {data} = await $authHost.get(`api/income_category/`);
    
    return data;
}

export const createIncomesCategory = async (name, color) => {
    const {data} = await $authHost.post(`api/income_category/create`, {name, color});
    
    return data;
}

