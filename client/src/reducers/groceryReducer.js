import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_GROCERIES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "EDIT_GROCERY_ITEM":
      return { ...state, [action.payload.id]: action.payload };
    case "ADD_GROCERY_ITEM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_GROCERY_ITEM":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
