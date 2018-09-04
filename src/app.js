import React from 'react'; 
import ReactDOM from 'react-dom';
import Routes from './Routes/routes';
import {addExpense,removeExpense,updateExpese} from  './actions/expenses';
import {setEndDate,setStartDate,setTextFilter,sortByAmount,sortByDate} from './actions/filters';
import configureStore from './store/configureStore';

const store = configureStore();
store.subscribe( ()=>{console.log(store.getState())});

const expenseOne = store.dispatch(
    addExpense( 
    {   description:'Internet Bill',
        notes:'Internet bill for this month',
        amount:5000,
        createdAt:new Date()
    }
 )
);

const expenseTwo = store.dispatch(
    addExpense( 
    {   description:'water Bill',
        notes:'water bill for this month',
        amount:500,
        createdAt:new Date()
    }
 )
);

store.dispatch( setTextFilter('rent'));
store.dispatch( sortByAmount()  );
ReactDOM.render(<Routes />, document.getElementById('app'));
store.dispatch( setStartDate(new Date() ) );