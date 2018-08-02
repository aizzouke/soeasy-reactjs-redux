import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages';
import reducer from './reducers';

const middleware = applyMiddleware(thunk);
const store = createStore(
  reducer,
  compose(
    middleware,
    autoRehydrate(),
  ),
);

persistStore(store, { storage: asyncSessionStorage });

export default store;
