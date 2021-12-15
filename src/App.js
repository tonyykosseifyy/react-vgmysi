import React from "react";
import "./styles/styles.css";
import { Navbar } from "./styled-components.js" ;
import styled from "styled-components";



const App = () => {
  return (
    <AppWrapper>
      <HomeWrapper>
        <Navbar></Navbar>
      </HomeWrapper>
    </AppWrapper>
  );
};


export default App ;


const AppWrapper = styled.div``;

const HomeWrapper = styled.main`
  height: 100vh ;
  background-color: lightblue;

`