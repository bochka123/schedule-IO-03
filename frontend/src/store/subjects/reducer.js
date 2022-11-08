import { DataStatus } from '../../common/enums';
import { createReducer } from '@reduxjs/toolkit';
import { fetchSubjects } from './actions';

const initialState = {
    subjects: [],
    status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (buider) => {

    buider.addCase(fetchSubjects.pending, (state) => {
        state.status = DataStatus.PENDING
    });

    buider.addCase(fetchSubjects.fulfilled, (state, { payload }) => {
        const { subjects } = payload;
        state.subjects = subjects;
        state.status = DataStatus.SUCCESS;
    });

});

export { reducer };