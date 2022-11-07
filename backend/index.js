import express from "express";
import mongoose from "mongoose";
import SubjectModel from './models/Subject.js';

const app = express();
const PORT = 3001;

mongoose.connect('mongodb+srv://admin:uXVP5tm!S3ViaNu@cluster0.ufmjis2.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB is connected'))
.catch((err) => console.log(err))

app.get('/', async (req, res) => {
    const doc = new SubjectModel({
        name: "Паралельне програмування",
        lecturer: "Корочкін Олександр Володимирович",
        deadline: "2019-12-31",
        task: "(-_-)",
        notes: "^_^",
        link: "https://google.com"
    })

    const subject = await doc.save();

    res.send(subject);
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})