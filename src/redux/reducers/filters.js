const initState = {
  category: 0,
  sortBy: 'popular',
};

const filters = (state = initState, action) => {
  if (action.sortBy === 'SET_SORT_BY   ') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  return state;
};

export default filters;
