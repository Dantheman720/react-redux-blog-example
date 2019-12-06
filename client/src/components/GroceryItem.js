import React, { useState } from "react";
import { connect } from "react-redux";
import { editGroceryItem, deleteGroceryItem } from "../actions";
import styled from "styled-components";

const GroceryItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 1rem;
  border-top: 0.1rem solid #cbcbcb;
  .grocery-item-field {
    align-self: center;
    margin-left: 1rem;
  }
`;

const GroceryItem = ({
  id,
  name,
  count,
  aisle,
  showEdit,
  deleteGroceryItem,
  editGroceryItem
}) => {
  const [editMode, setEditMode] = useState(showEdit);
  const [groceryName, setGroceryName] = useState(name);
  const [groceryCount, setGroceryCount] = useState(count);
  const [groceryAisle, setGroceryAisle] = useState(aisle);

  const GroceryEdit = () => (
    <>
      <input
        type="text"
        value={groceryName}
        onChange={e => setGroceryName(e.target.value)}
      />
      <input
        type="text"
        value={groceryCount}
        onChange={e => setGroceryCount(e.target.value)}
      />
      <input
        type="text"
        value={groceryAisle}
        onChange={e => setGroceryAisle(e.target.value)}
      />
      <span className="grocery-list-modifiers">
        <button
          className="ui primary button"
          onClick={() => {
            setEditMode(false);
            editGroceryItem(id, {
              name: groceryName,
              count: groceryCount,
              aisle: groceryAisle,
              showEdit: false
            });
          }}
        >
          Save
        </button>
        <button
          className="ui button"
          onClick={() => {
            setEditMode(false);
          }}
        >
          Cancel
        </button>
      </span>
    </>
  );

  const GroceryDisplay = () => (
    <>
      <span className="grocery-item-field">{name}</span>
      <span className="grocery-item-field">{count}</span>
      <span className="grocery-item-field">{aisle}</span>
      <span className="grocery-list-modifiers">
        <button className="ui green button" onClick={() => setEditMode(true)}>
          Edit
        </button>
        <button className="ui red button" onClick={() => deleteGroceryItem(id)}>
          Remove
        </button>
      </span>
    </>
  );

  return (
    <GroceryItemWrapper>
      {editMode ? GroceryEdit() : GroceryDisplay()}
    </GroceryItemWrapper>
  );
};

export default connect(null, { editGroceryItem, deleteGroceryItem })(
  GroceryItem
);
