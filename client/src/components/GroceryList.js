import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchGroceries, addGroceryItem } from "../actions";
import GroceryItem from "./GroceryItem";

const GroceryListWrapper = styled.div`
  .table-heading {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 1rem 0;
    .grocery-table-heading {
      font-size: 1.6rem;
    }
  }
`;

const GroceryList = props => {
  useEffect(() => {
    props.fetchGroceries();
  }, []);
  return (
    <GroceryListWrapper>
      <div className="table-heading">
        <span className="grocery-table-heading">Item</span>
        <span className="grocery-table-heading">Amount</span>
        <span className="grocery-table-heading">Location (Aisle)</span>
      </div>
      {props.groceries.map(item => (
        <GroceryItem {...item} key={item.id} />
      ))}
      <button
        className="ui green button"
        onClick={() =>
          props.addGroceryItem({
            name: "",
            count: "",
            aisle: "",
            showEdit: true
          })
        }
      >
        Add Item
      </button>
    </GroceryListWrapper>
  );
};

const mapStateToProps = state => {
  return {
    groceries: Object.values(state.groceries)
  };
};

export default connect(mapStateToProps, { fetchGroceries, addGroceryItem })(
  GroceryList
);
