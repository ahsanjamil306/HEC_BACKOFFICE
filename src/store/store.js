import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import user from './reducer/user';
// local imp

// config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

//  root reducer
const rootReducer = combineReducers({
  user: user,
});

const persiReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persiReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
