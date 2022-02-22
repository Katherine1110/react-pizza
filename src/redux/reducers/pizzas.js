const initState = {
  items: [],
  isLoading: false,
};

const pizzas = (state = initState, action) => {
  if (action.sortBy === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
      isLoading: true,
    };
  }
  return state;
};

export default pizzas;
