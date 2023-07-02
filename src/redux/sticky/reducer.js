const initialState = { click: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "clicked":
      return {
        ...state,
        click: action.payload.click,
      };
    default:
      return state;
  }
}
