import {combineReducers} from 'redux';
import homeReducer from '../modules/home/home.reducer';

export default combineReducers({
  homeReducer: homeReducer,
});
