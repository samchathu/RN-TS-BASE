import {SAMPLE_TYPE} from '../../types';
import {persistReducer, PURGE, REHYDRATE} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  sampleType: false,
};

const persistConfig = {
  key: 'homeStore',
  storage: AsyncStorage,
};

const homeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
      };
    case SAMPLE_TYPE:
      return {
        ...state,
        sampleType: true,
      };
    case PURGE:
    default:
      return state;
  }
};

export default persistReducer(persistConfig, homeReducer);
