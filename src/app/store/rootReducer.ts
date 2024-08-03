import { combineReducers } from 'redux';
import dataReducer from '../features/data/dataSlice';
import modalReducer from '../features/modal/modalSlice';

export const rootReducer = combineReducers({
  data: dataReducer,
  modal: modalReducer,
});
