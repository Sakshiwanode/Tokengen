import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appStateSlice } from './authSlice';  
import { appLevelApi } from '../services/appLevel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';


export type RootState = ReturnType<typeof store.getState>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  appState: appStateSlice.reducer,
  [appLevelApi.reducerPath]: appLevelApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
      immutableCheck: false,
    }).concat(appLevelApi.middleware),
});

export const persistor = persistStore(store);
