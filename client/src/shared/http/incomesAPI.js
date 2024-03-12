import { $host, $authHost} from "./index";


export const getIncomesByDate = async (id, fromDate, toDate) => {
    const {data} = await $authHost.get(`api/income?id=${id}&from=${fromDate}&to=${toDate}`);
    
    return data;
}


export const getIncomesCategoriesByDate = async (id) => {
    const {data} = await $authHost.get(`api/income_category/${id}`);
    
    return data;
}