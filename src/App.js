import { useState } from "react";
import "./styles/styles.css" ;
import styled from "styled-components";
import Navbar from "./components/Navbar" ;
import { HomeTitle } from "./styled-components";

const App = () => {
  return (
    <AppWrapper>
      <main className="home">
        <Navbar />
				<HomeTitle>
					We are creatives
				</HomeTitle>
      </main>
    </AppWrapper>
  );
};


export default App ;


const AppWrapper = styled.div``;
