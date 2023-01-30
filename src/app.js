import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route ,Switch , Link,NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectrors/expenses'



const store=configureStore();

store.dispatch(addExpense({ description: 'water bill' ,amount:300 , createdAt:1000}));
store.dispatch(addExpense({ description: 'Gas bill' ,amount:500 , createdAt:2000 }));
store.dispatch(addExpense({ description: 'Rent' ,amount:1000 , createdAt:1000}));

store.dispatch(setTextFilter('bill'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('rent'));

// }, 3000);


  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);

const jsx=(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

  ReactDOM.render(jsx, document.getElementById('app'));
  