// Filter Reducers 

const filtersReducerDefaultState = {
    text      :   '',
    sortBy    :   'date',
    startDate : undefined,
    endDate   : undefined
};





//Reducer for filter store

const filtersReducers = (state = filtersReducerDefaultState, action)=>{

    switch(action.type)
    {
        case 'SET_TEXT' :
                        return {...state , text :action.text};
        case 'SORT_BY_AMOUNT':
                        return {...state,sortBy : 'amount'} ;
        case 'SORT_BY_DATE' :
                        return {...state,sortBy : 'date'};
        case 'SET_START_DATE' :
                        return {...state, startDate : action.startDate };
        case 'SET_END_DATE' :
                        return {...state, endDate : action.endDate };

        default :
                return state;
    }



}

// action creator ;

const setTextFilter = (text = '') =>({ type:'SET_TEXT', text  })

// action  creator for sortByAmount  

const sortByAmount = () => ({ type : 'SORT_BY_AMOUNT' });

// action creator for sortByDate

const sortByDate = () => ({ type : 'SORT_BY_DATE' });

// action creator for setStartDate

const setStartDate = (startDate = undefined ) => ( { type : 'SET_START_DATE',startDate  } );

// action creator for setEndDate 

const setEndDate = (endDate =  undefined ) => ( { type : 'SET_END_DATE', endDate  });


export default filtersReducers;