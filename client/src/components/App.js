import React from "react";
import styled from "styled-components";
import Header from "./Header";
import GroceryList from "./GroceryList";

const AppWrapper = styled.div`
  .navbar {
    background-color: black;
    padding: 10px;
    margin: 0;
    color: #fff;
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <div className="navbar">
        <Header />
      </div>
      <div className="ui container">
        <GroceryList />
      </div>
    </AppWrapper>
  );
};

export default App;
