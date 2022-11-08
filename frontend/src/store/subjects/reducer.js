import { DataStatus } from '../../common/enums';
import { createReducer } from '@reduxjs/toolkit';
import { fetchSubjects, updateSubject } from './actions';

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

    buider.addCase(updateSubject.pending, (state) => {
        state.status = DataStatus.PENDING;
    })

    buider.addCase(updateSubject.fulfilled, (state, { meta }) => {
        const { arg } = meta;

        state.subjects = state.subjects.map((item) => {
            return item._id === arg._id ? {...item, ...arg} : item;
        });

        state.status = DataStatus.SUCCESS;
    })

});

export { reducer };