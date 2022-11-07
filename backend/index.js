import express from "express";
import LessonModel from './models/Lesson.js';

const app = express();
const PORT = 3001;

app.get('/', async (req, res) => {
    // const doc = new LessonModel({
    //     id: "1",
    //     name: "Паралельне програмування",
    //     lecturer: "Корочкін Олександр Володимирович",
    //     deadline: "2019-12-31",
    //     task: "(-_-)",
    //     notes: "^_^",
    //     link: "https://google.com"
    // })

    // const lesson = await doc.save();

    res.send('Hello');
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})