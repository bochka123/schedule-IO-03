import { ActionType } from './common';
import { DataStatus } from '../../common/enums';

const initialState = {
    trips: [],
    status: DataStatus.IDLE,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case ActionType.GET: {
            const { subjects } = payload;
            return{
                ...state,
                subjects,
            }
        }
        default: {
            return state;
        }
    }
}

export { reducer };