import {supabase} from '../db.js';

class accountControllerClass {
    async create(req, res) {
        const {name, amount, image, color, user_id} = req.body;

        const {data, error} = await supabase
            .from('accounts')
            .insert([{
                user_id: user_id,
                name: name,
                amount: amount, 
                image: image,
                color: color
            }])
            .select()
        if (error) {
            console.log(error);
        }

        return res.json(data);
    }

    async getOne (req, res) {
        const {data, error} = await supabase
            .from('accounts')
            .select('*')
            .eq('id', req.params.id)
        if (error) {
            return res.json(error);
        }
        return req.json(data);
    }

    async getAll (req, res) {
        const {data, error} = await supabase
            .from('accounts')
            .select('*')
            
        if (error) {
            return res.json(error);
        }
        return res.json(data);
    }
}

const accountController = new accountControllerClass();
export {accountController};