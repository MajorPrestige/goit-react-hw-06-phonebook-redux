import { createStore } from 'redux';

const initialStore = {
  contacts: [
    {
      id: '1',
      name: 'Dan',
      number: '123412312351',
    },
    {
      id: '2',
      name: 'Prestige',
      number: '12312321312',
    },
  ],
};

const reducer = (store = initialStore) => {
  return store;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
