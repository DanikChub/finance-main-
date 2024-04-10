import { $authHost} from "./index";

export const getAccounts = async () => {
    const {data} = await $authHost.get(`api/account/`);
    
    return data;
}

export const getAccountById = async (id) => {
    const {data} = await $authHost.get(`api/account/${id}`);
    
    return data;
}

export const createAccount = async (user_id, name, amount, image, color) => {
    const {data} = await $authHost.post(`api/account/create`, {user_id, name, amount, image, color});
    
    return data;
}

