import React from "react";
import "./styles/styles.css";
import { Navbar , Logo } from "./styled-components.js" ;
import styled from "styled-components";



const App = () => {
  return (
    <AppWrapper>
      <main className="home">
        <Navbar>
          <Logo />
        </Navbar>
      </main>
    </AppWrapper>
  );
};


export default App ;


const AppWrapper = styled.div``;
