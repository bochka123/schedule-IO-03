import SubjectModel from '../models/Subject.js';

export const getAll = async (req, res) => {
    try {
        const subjects = await SubjectModel.find();

        return subjects;
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Cannot find subjects('
        });
    }
}

export const getOne = async (req, res) => {
    try {
        const subjectId = req.params.id;

        return await SubjectModel.findOne({
            _id: subjectId,
        }, {
            name: true,
            lecturer: true,
            deadline: true,
            task: true,
            notes: true,
            link: true
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Cannot find subject('
        });
    }
}

export const update = async (req, res) => {
    try {
        const subjectId = req.params.id;

        await SubjectModel.updateOne({
            _id: subjectId,
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
        
        return true;
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Cannot update subjects('
        });
    }
}
