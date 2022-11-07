import express from "express";
import mongoose from "mongoose";
import * as SubjectConstroller from './controllers/SubjectController.js';

const app = express();
const PORT = 3001;

mongoose.connect('mongodb+srv://admin:uXVP5tm!S3ViaNu@cluster0.ufmjis2.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB is connected'))
.catch((err) => console.log(err))

app.get('/subject', async (req, res) => {
    const data = await SubjectConstroller.getAll();
    res.send(data);
})

app.get('/subject/:id', async (req, res) => {
    const data = await SubjectConstroller.getOne(req, res);
    res.send(data);
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})