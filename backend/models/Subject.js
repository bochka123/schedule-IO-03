import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    lecturer: {
        type: String,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
});

export default mongoose.model('Subject', SubjectSchema);