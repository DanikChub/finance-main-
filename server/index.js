import 'dotenv/config'
import express from 'express';
import { router } from './routes/index.js';
import { createClient } from '@supabase/supabase-js'
import bodyParser from 'body-parser';



const supabase = createClient('https://yelasontypiaqpbulbvo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllbGFzb250eXBpYXFwYnVsYnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNDA1NTksImV4cCI6MjAyNDcxNjU1OX0.7q02oFJCNTUrnLqW3s77qeRjnO5nmkvGeAgO_r4ciwI')
const PORT = process.env.PORT || 5000;
const app = express();
app.use('/api', router);

app.use(bodyParser.json());
app.post('/', async (req, res) => {
    const {name, password} = req.body;
    const {error} = await supabase
        .from('users')
        .insert({
            name: name,
            password: password,
            
        })
    
    if (error) {
        res.send(error);
    }
    res.send('created!');
})

app.get('/', async (req, res) => {
    const {id, name} = await supabase.from('users').select();
    res.send(name);
})

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server will start on port ${PORT}`));
    } catch(e) {
        console.log(e);
    }
}

start();