import { configureStore } from '@reduxjs/toolkit';
import { subjects } from './rootReducer';
import { subjects as subjectsService } from '../services';

const store = configureStore({
    reducer: subjects,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    subjectsService,
                }
            }
        })
    }
});

export { store };