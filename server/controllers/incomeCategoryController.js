import {supabase} from '../db.js'

class incomeCategoryControllerClass {
    async create(req, res) {
        const {name, color} = req.body;

        const {data, error} = await supabase    
            .from('income_category')
            .insert([{
                name: name,
                color: color,
                
            }])
            .select()
            
        if (error) {
            console.log(error);
        }
        
        return res.json(data);
    }
    async getAll(req, res) {
        const {data, error} = await supabase
            .from('income_category')
            .select('*')
            
        if (data && data.length > 0) {

            return res.json(data);
        }
        return res.json(error.array_id);    
    }
    async getAllWithParametr(req, res) {
        const parseArrayId = JSON.parse(req.query.array_id);
        
        const {data, error} = await supabase
            .from('income_category')
            .select('*')
            .in('id', parseArrayId)
        
       
        if (data && data.length > 0) {

            return res.json(data);
        }
        return res.json(error);
    }

    async getOne(req, res) {
        const {data, error} = await supabase
            .from('income_category')
            .select('*')
            .eq('id', req.params.id)
        

        if (data) {
            return res.json(data[0]);
        }
        return res.json(error);
    }
}

const incomeCategoryController = new incomeCategoryControllerClass();

export {
    incomeCategoryController
}
