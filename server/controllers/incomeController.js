import {supabase} from '../db.js';


class incomeControllerClass {
    async getAll (req, res) {
        const {data, error} = await supabase
            .from('income')
            .select()
        return res.json(data);
    }
    async create (req, res) {
        const {amount, user_id, category_id} = req.body;
    
        const {data, error} = await supabase
            .from('income')
            .insert([{
                    amount: amount,
                    date: date,
                    user_id: user_id,
                    category_id: category_id
                }])
            .select()
            
        if (error) {
            console.log(error);
        }
        
        return res.json(data);
    }
    async getOne (req, res) {
        
    }
}

const incomeController = new incomeControllerClass();
export {incomeController};