const initialState = {
  carsData: [],
  message: "",
  carDetail: {},
  carEdit: "",
  carAdd: "",
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LISTCAR":
      return {
        ...initialState,
        carsData: action.payload,
      };
    case "DELETECAR":
      return {
        ...initialState,
        message: action.payload,
      };
    case "DETAILCAR":
      return {
        ...initialState,
        carDetail: action.payload,
      };
    case "EDITCAR":
      return {
        ...initialState,
        carEdit: action.payload,
      };
    case "ADDCAR":
      return {
        ...initialState,
        carAdd: action.payload,
      };
    default:
      return state;
  }
};
