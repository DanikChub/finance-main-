import {supabase} from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {ApiError} from '../error/ApiError.js';

const generateJwt = (id, email) => {
    return jwt.sign({
        id: id, email
    }, process.env.SECRET_KEY,
    {expiresIn: '24h'})
}

class userControllerClass {
 async registration(req, res, next) {
    const {email, password, name} = req.body;
    if (!email || !password) {
        return next(ApiError.badRequest('Некорректный email или пароль'));
    }
    const candidate = await supabase
        .from('users')
        .select("*")
        .eq('email', email)
    if (candidate.data[0]) {
        
        return next(ApiError.badRequest('Пользователь с таким email уже существует'));
    }
    const hashPassword = await bcrypt.hash(password,5);
    const {data, error} = await supabase
        .from('users')
        .insert([{
            email,
            password: hashPassword,
            name
        }]);
    const user = await supabase
        .from('users')
        .select('*')
        .eq('email', email);
    
    const token = generateJwt(user.data[0].id, user.data[0].email)
   
    return res.json({token: token, id: user.data[0].id});
 }

 async login(req, res, next) {
    const {email, password} = req.body;
    const {data, error} = await supabase
        .from('users')
        .select("*")
        .eq('email', email)
    
    if (!data[0]) {
        return next(ApiError.internal('Пользователь с таким именем не найден!'))
    }

    let comparePassword = bcrypt.compareSync(password, data[0].password);
    if (!comparePassword) {
        return next(ApiError.internal('Указаный пароль не верен!'))
    }
    const token = generateJwt(data[0].id, data[0].email)
    
    return res.json({token});
 }

 async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email);
    
    return res.json({token: token, name: req.user.name, id: req.user.id});
}   
async getUserById(req, res, next) {
    const {id} = req.body;
    const user = await supabase
        .from('users')
        .select('*')
        .eq('id', id);

    
    return res.json(user);
}
}


const userController = new userControllerClass();
export {userController};

