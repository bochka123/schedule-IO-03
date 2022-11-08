import { ActionType } from './common';
import { DataStatus } from "../../common/enums";

const setStatus = (status) =>({
    type: ActionType.SET_STATUS,
    payload: {
        status,
    }
});

const fetchSubjects = () => async (dispatch, getStore, { subjectsService }) => {

    dispatch(setStatus(DataStatus.PENDING));

    try{
        const subjects = await subjectsService.getAll();

        dispatch({
            type: ActionType.SET_SUBJECTS,
            payload:{
                subjects,
            },
        });

        dispatch(setStatus(DataStatus.SUCCESS));
    } catch {
        dispatch(setStatus(DataStatus.ERROR));
    }

}

export { fetchSubjects };