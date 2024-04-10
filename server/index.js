import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { router } from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import bodyParser from 'body-parser';

const PORT = process.env.PORT || 5000;
let app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server will start on port ${PORT}`));
    } catch(e) {
        console.log(e);
    }
}

start();