import { createStore,combineReducers } from "redux";
import expensesReducer from '../reducers/expneses';
import filtersReducer from '../reducers/filters'

export default () => {

    const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  return store;
}


// Store creation

