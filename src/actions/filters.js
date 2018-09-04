// action creator ;

export const setTextFilter = (text = '') =>({ type:'SET_TEXT', text  })

// action  creator for sortByAmount  

export const sortByAmount = () => ({ type : 'SORT_BY_AMOUNT' });

// action creator for sortByDate

export const sortByDate = () => ({ type : 'SORT_BY_DATE' });

// action creator for setStartDate

export const setStartDate = (startDate = undefined ) => ( { type : 'SET_START_DATE',startDate  } );

// action creator for setEndDate 

export const setEndDate = (endDate =  undefined ) => ( { type : 'SET_END_DATE', endDate  });