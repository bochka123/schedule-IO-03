import { ActionType } from './common';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchSubjects = createAsyncThunk(ActionType.GET, async (_args, { extra }) => ({
    subjects: await extra.subjectsService.getAll(),
}));

const updateSubject = createAsyncThunk(ActionType.UPDATE, async ({_id, status}, {extra}) => ({
    subject: await extra.subjectsService.particalUpdate(_id, {
        status,
    }),
}))

export { fetchSubjects, updateSubject };