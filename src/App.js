import React from "react";
import "./styles/styles.css";
import { Navbar } from "./styled-components.js" ;
import styled from "styled-components";
const image = require("./assets/image-header.jpg");


const App = () => {
  return (
    <AppWrapper>
      <HomeWrapper className="home">
        <Navbar></Navbar>
      </HomeWrapper>
    </AppWrapper>
  );
};


export default App ;


const AppWrapper = styled.div``;

const HomeWrapper = styled.main`
  height: 100vh ;
  background: url("./assets/image-header.jpg");
  
`


