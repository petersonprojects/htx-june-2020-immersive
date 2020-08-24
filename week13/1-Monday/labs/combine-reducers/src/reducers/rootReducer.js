import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import authorReducer from './authorReducer';

const rootReducer = combineReducers({

    authors: authorReducer,
    books: bookReducer
    
});

export default rootReducer;