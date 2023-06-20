import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import web from './routes/web.js';
import {join} from 'path';
import connectDB from './db/database.js';
const app =express();
const port=process.env.PORT || 3000;
const database=process.env.DB_URL;
 
connectDB(database);
app.use(express.urlencoded({extended:false}));
app.use(express.static(join(process.cwd(),'public')));
app.set('view engine' ,'ejs');

app.use('/',web);

app.listen(port,()=>{
    console.log(`app is runnig on port ${port}`);
})