import { useState } from "react";
import "./styles/styles.css";
import { Navbar , Logo , NavbarLinks , Link , backgroundBar } from "./styled-components.js" ;
import styled from "styled-components";



const links = ["About" , "Services" , "Projects" , "Contact"];

const App = () => {
	const [ hover , setHover ] = useState(false) ;
	const [ hoverIndex , setHoverIndex ] = useState(0);
  return (
    <AppWrapper>
      <main className="home">
        <Navbar>
          <Logo />
					<img src="./assets/logo.svg" alt="logo" />
					<NavbarLinks onHover={() => setHover(true)} >
							<div 
								style={{opacity: hover ? "1" : "0" , left:`${hoverIndex * 100}px`}} 
								className='background-bar' 
								opacity={hover ? "1" : "1"} 
								left={`${hoverIndex * 100}px`} 
							/>
							{ links.map((link , index) => (
									<Link onHover={() => setHoverIndex(index)}>{link}</Link>
							))}
					</NavbarLinks>
        </Navbar>
      </main>
    </AppWrapper>
  );
};
				

export default App ;


const AppWrapper = styled.div``;
