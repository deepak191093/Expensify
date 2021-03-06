const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState , action ) =>{
    
    switch(action.type)
    {
        case 'ADD_EXPENSE' :
                              
                           return [...state,action.expenses]; 
                           break;
        case 'REMOVE_EXPENSE' :
                             return state.filter( ( {id} ) =>  !(id === action.id)  );      
                            break;

        case 'UPDATE_EXPENSE':
                                
                                
                           return  state.map(  (expense) => { 

                                if(expense.id === action.id)
                                {
                                                                                                          
                                  return ({...expense,...action.obj})
                                
                                    
                                }
                                else
                                    return expense;
                            }); 
                            
                            
                                                   
        default : 
                return state;
    }

}

export default expensesReducer;