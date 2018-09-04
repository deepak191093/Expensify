import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducers from '../reducers/filters';



export default ()=>{
const obj = combineReducers({

    expenses    :   expensesReducer,
    filters     :   filtersReducers

});

const store = createStore(obj);

return store;
}