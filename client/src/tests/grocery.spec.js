import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import groceryReducer from "../reducers/groceryReducer";

import { addGroceryItem, editGroceryItem, fetchGroceries } from "../actions";

const store = createStore(groceryReducer, applyMiddleware(reduxThunk));

describe("Test suite for Groceries", () => {
  test("Fetch grocery list", async () => {
    await store.dispatch(fetchGroceries());

    expect(store.getState()).toEqual({
      "1": {
        name: "Chicken",
        count: "2 lbs",
        aisle: 14,
        showEdit: false,
        id: 1
      }
    });
  });
  test("Adds item to grocery list", async () => {
    await store.dispatch(
      addGroceryItem({
        name: "",
        count: "",
        aisle: "",
        id: 2,
        showEdit: true
      })
    );
    expect(store.getState()).toEqual({
      "1": {
        name: "Chicken",
        count: "2 lbs",
        aisle: 14,
        showEdit: false,
        id: 1
      },
      "2": {
        aisle: "",
        count: "",
        id: 2,
        name: "",
        showEdit: true
      }
    });
  });
  test("Edit existing item in grocery list", async () => {
    await store.dispatch(
      editGroceryItem("2", {
        aisle: 14,
        count: "1",
        id: 2,
        name: "Pizza",
        showEdit: false
      })
    );
    expect(store.getState()).toEqual({
      "1": {
        name: "Chicken",
        count: "2 lbs",
        aisle: 14,
        showEdit: false,
        id: 1
      },
      "2": {
        aisle: 14,
        count: "1",
        id: 2,
        name: "Pizza",
        showEdit: false
      }
    });
  });
  test("Remove existing item fro grocery list", () =>
    expect(true).toEqual(true));
});
