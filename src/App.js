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
<<<<<<< HEAD
};


=======
}
>>>>>>> 2f58ab706452f5f28a65e56d853b7a5b49c47ced
export default App ;


const AppWrapper = styled.div``;

const HomeWrapper = styled.main`
  height: 100vh ;
  background-color: lightblue;

`