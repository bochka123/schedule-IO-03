import express from "express";
import LessonModel from './models/Lesson.js';

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello');
    const doc = new LessonModel({
        id: "1",
        name: "Паралельне програмування",
        lecturer: "Корочкін Олександр Володимирович",
        deadline: "2019-12-31",
        task: "(-_-)",
        notes: "^_^",
        link: "https://google.com"
    })
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})