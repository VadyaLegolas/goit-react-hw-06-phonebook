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

// import { contactsReducer } from './reducers'; //todo: add reducer here

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const namedPersistReducer = persistReducer(persistConfig, contactsReducer);

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

import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducers";


const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

// store.dispatch({ type: "ADD_CONTACT", payload: { id: 1, name: "Bob", number: 123 } })
// store.dispatch({ type: "ADD_CONTACT", payload: { id: 2, name: "Alice", number: 456 } })