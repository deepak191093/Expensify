import uuid from 'uuid';

// Action Creator :-

//Add Expense
export const addExpense = ({ description = 'Not Set', notes = 'Not Set', amount = 0 , createdAt = new Date()} = {}) => ({

    type : 'ADD_EXPENSE',
    expenses : {
        id : uuid(),
        description,
        notes,
        amount,
        createdAt
    }
}); 

// RemoveExpenseActionCreator

export const removeExpense = ( { id = '' } = {} ) => {
    
   return {
    type : 'REMOVE_EXPENSE',
    id
}};

// Update Expense Action Creator
export const updateExpese = ( ( id , obj )  => ({ 

        type: 'UPDATE_EXPENSE',
        id,
        obj

    }) );