import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['homeReducer'],
};

const persit = persistReducer(persistConfig, reducers);

export const store = createStore(persit, {}, applyMiddleware(ReduxThunk));

export const persister = persistStore(store);
