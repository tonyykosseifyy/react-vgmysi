import { useState } from "react";
import "./styles/styles.css" ;
import styled from "styled-components";
import Navbar from "./components/Navbar" ;


const App = () => {
  return (
    <AppWrapper>
      <main className="home">
        <Navbar />
      </main>
    </AppWrapper>
  );
};


export default App ;


const AppWrapper = styled.div``;
