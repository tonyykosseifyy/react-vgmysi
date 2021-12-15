import React from "react";
import "./styles/styles.css";
import { Navbar } from "./styled-components.js" ;
import styled from "styled-components";



const App = () => {
  return (
    <AppWrapper>
      <Navbar></Navbar>
    </AppWrapper>
  );
}
export default App ;


const AppWrapper = styled.div``;