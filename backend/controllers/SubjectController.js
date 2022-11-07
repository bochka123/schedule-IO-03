import SubjectModel from '../models/Subject.js';

export const getAll = async (req, res) => {
    try {
        const subjects = await SubjectModel.find();
        res.json(subjects);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Cannot find subjects('
        });
    }
}

export const update = async (req, res) => {
    try {
        const subjectId = req.params.id;

        await SubjectModel.updateOne({
            id: subjectId,
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
            message: 'Cannot update subjects('
        });
    }
}
