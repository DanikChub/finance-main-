import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { router } from './routes/index.js';

import bodyParser from 'body-parser';

const PORT = process.env.PORT || 5000;
let app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server will start on port ${PORT}`));
    } catch(e) {
        console.log(e);
    }
}

start();