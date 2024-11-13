import express from 'express';
import connection from './dataBase/db.js';
import cors from 'cors';
import router from './routes/route.js';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/",router);

const port=8000;


connection();

app.listen(port,()=>console.log(`server is running on port ${port}`));
