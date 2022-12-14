import express from "express";
import mongoose from "mongoose";
import * as SubjectConstroller from './controllers/SubjectController.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3001;

mongoose.connect('mongodb+srv://admin:uXVP5tm!S3ViaNu@cluster0.ufmjis2.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB is connected'))
.catch((err) => console.log(err))

app.use(cors());

app.use(express.json())
app.use(bodyParser.urlencoded())

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/subjects', async (_req, res) => {
    res.send(await SubjectConstroller.getAll());
})

app.patch('/subjects/:id', async (req, res) => {
    res.send(await SubjectConstroller.update(req, res));
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})