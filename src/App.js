import React from "react";
import "./styles/styles.css";
import { Navbar } from "./styled-components.js" ;
import styled from "styled-components";



const App = () => {
  return (
    <AppWrapper>
      <main className="home">
        <Navbar></Navbar>
      </main>
    </AppWrapper>
  );
};


export default App ;


const AppWrapper = styled.div``;
