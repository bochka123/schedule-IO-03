import express from "express";
import mongoose from "mongoose";
import * as SubjectConstroller from './controllers/SubjectController.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

mongoose.connect('mongodb+srv://admin:uXVP5tm!S3ViaNu@cluster0.ufmjis2.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB is connected'))
.catch((err) => console.log(err))


var jsonParser = bodyParser.json()

app.get('/subjects', async (req, res) => {
    const data = await SubjectConstroller.getAll();
    res.set('Access-Control-Allow-Origin', '*');
    res.send(data);
})

app.get('/subjects/:id', async (req, res) => {
    const data = await SubjectConstroller.getOne(req, res);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(data);
})

app.patch('/subjects/:id', jsonParser, async (req, res) => {
    const data = await SubjectConstroller.update(req, res);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(data);
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})