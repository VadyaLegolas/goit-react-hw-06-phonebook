// import { configureStore } from '@reduxjs/toolkit';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';

// import { rootReducer } from './reducers'; 

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const namedPersistReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: namedPersistReducer,//todo: add reducer here
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import { reducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({reducer});