import axios from "axios";

export const fetchGroceries = () => async dispatch => {
  const response = await axios.get("http://localhost:3001/groceries");
  dispatch({ type: "FETCH_GROCERIES", payload: response.data });
};
export const addGroceryItem = values => async dispatch => {
  const response = await axios.post("http://localhost:3001/groceries", values);
  dispatch({ type: "ADD_GROCERY_ITEM", payload: response.data });
};

export const editGroceryItem = (id, values) => async dispatch => {
  const response = await axios.patch(
    `http://localhost:3001/groceries/${id}`,
    values
  );
  dispatch({ type: "EDIT_GROCERY_ITEM", payload: response.data });
};
export const deleteGroceryItem = id => async dispatch => {
  await axios.delete(`http://localhost:3001/groceries/${id}`);
  dispatch({ type: "DELETE_GROCERY_ITEM", payload: id });
};
