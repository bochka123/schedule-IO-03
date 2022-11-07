import LessonModel from '../models/Lesson.js';

export const getAll = async (req, res) => {
    try {
        const lessons = await LessonModel.find();
        res.json(lessons);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Cannot find lessons('
        });
    }
}

export const update = async (req, res) => {
    try {
        const lessonId = req.params.id;

        await LessonModel.updateOne({
            id: lessonId,
        },
        {
            name: req.body.name,
            lecturer: req.body.lecturer,
            deadline: req.body.deadline,
            task: req.body.task,
            notes: req.body.notes,
            link: req.body.link
        },
        );
        res.json({
            success: true,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Cannot update lessons('
        });
    }
}
