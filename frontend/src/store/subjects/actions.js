import { ActionType } from './common';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchSubjects = createAsyncThunk(ActionType.GET, async (_args, { extra }) => ({
    subjects: await extra.subjectsService.getAll(),
}));

const updateSubject = createAsyncThunk(ActionType.UPDATE, async (params, {extra}) => ({
    subject: await extra.subjectsService.particalUpdate(params._id, {
        ...params,
    }),
}))

export { fetchSubjects, updateSubject };