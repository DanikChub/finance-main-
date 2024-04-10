import {supabase} from '../db.js';


class incomeControllerClass {
    async getByCategoryId(req, res) {
        const {data, error} = await supabase
            .from('income')
            .select('*')
            .eq('user_id', req.query.id)
            .gte('date', req.query.from)
            .lte('date', req.query.to)
            .eq('category_id', req.query.category_id)
            .order('date', { ascending: true })
       
        if (error) {
            return res.json(error);
        }
        return res.json(data);
    }
    async getAll (req, res) {
        
        let countArray = [];
        const {data, error} = await supabase
            .from('income')
            .select('*')
            .eq('user_id', req.query.id)
            .gte('date', req.query.from)
            .lte('date', req.query.to)
            .order('category_id', { ascending: true })
        
        if (data) {
            if (data.length > 0) {
                
                let finallyArray = data;
                let category = finallyArray[0].category_id;
                countArray = [
                    {
                        id: finallyArray[0].id,
                        amount: 0,
                        date: finallyArray[0].date,
                        user_id: finallyArray[0].user_id,
                        category_id: finallyArray[0].category_id, 
                        category: finallyArray[0].category, 
                    }
                ]
                finallyArray.forEach((income, i) => {
                    if (income.category_id != category) {
                        countArray.push({
                            id: income.id,
                            amount: 0,
                            date: income.date,
                            user_id: income.user_id,
                            category_id: income.category_id,  
                            category: income.category,  
                        })
                        category = income.category_id;
                    }
                    countArray.forEach((obj, j) => {
                        if (obj.category_id == income.category_id) {
                            obj.amount+=income.amount;
                        }
                        
                    })
                    category = income.category_id;
                    
                })
            }
        }
       
        return res.json(countArray);
    }
    async create (req, res) {
        const {amount, date, user_id, category_id} = req.body;
        let obj = {
            color: 'transparent',
            name: 'no'
        }
        
        const {data, error} = await supabase
            .from('income')
            .insert([{
                    amount: amount,
                    date: date,
                    user_id: user_id,
                    category_id: category_id,
                    category: obj
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