const initialState = localStorage["items"]
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const cities = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITY": {
      if (state.find((obj) => obj.city === action.city) === undefined) {
        return [
          ...state,
          {
            city: action.city,
            id: action.id,
          },
        ];
      }
      return state;
    }
    case "DELETE_CITY":
      let newState = [...state];
      return newState.filter((obj) => {
        return obj.id !== action.id;
      });
    default:
      return state;
  }
};

export default cities;
