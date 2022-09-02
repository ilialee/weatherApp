const initialState = localStorage['items'] ? JSON.parse(localStorage.getItem('items')) : [];

const cities = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        {
          city: action.city,
          id: action.id,
        },
      ];
    case 'DELETE_CITY':
      let newState = [...state];
      return newState.filter((obj) => {
        return obj.id !== action.id;
      });
    default:
      return state;
  }
};

export default cities;
