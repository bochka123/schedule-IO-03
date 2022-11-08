import { ActionType } from './common';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchSubjects = createAsyncThunk(ActionType.GET, async (_args, { extra }) => ({
    subjects: await extra.subjectsService.getAll(),
}));

export { fetchSubjects };