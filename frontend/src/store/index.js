import { combineReducers, createStore, applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { subjects } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { subjects as subjectsService } from '../services';
import { thunk as thunkMiddleware} from './middlewares';

// const store = configureStore({
//     reducer: subjects,
//     middleware: (getDefaultMiddleware) => {
//         return getDefaultMiddleware({
//             thunk: {
//                 extraArgument: {
//                     subjectsService,
//                 }
//             }
//         })
//     }
// });

const store = createStore(
    combineReducers({
        subjects,
    }),
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware.withExtraArgument({
                subjectsService,
            })
        )
    )
);

export { store };