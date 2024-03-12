import {supabase} from '../db.js'

class incomeCategoryControllerClass {
    create() {

    }

    getAll() {

    }

    async getOne(req, res) {
        const {data, error} = await supabase
            .from('income_category')
            .select('*')
            .eq('id', req.params.id)
            
        
        return res.json(data[0]);
    }
}

const incomeCategoryController = new incomeCategoryControllerClass();

export {
    incomeCategoryController
}
