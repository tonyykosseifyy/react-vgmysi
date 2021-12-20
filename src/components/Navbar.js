import React , { useState } from "react" ;
import { Navbar , Logo , NavbarLinks , Link , BackgroundBar } from "../styled-components.js" ;
import Hamburger from "./Hamburger";

const links = ["About" , "Services" , "Projects" , "Contact"];
const linksWidth = [ 48.141 , 69.063 , 66.734 , 63.156 ];

const leftFunction = ( hoverIndex ) => {
	let sum = 0 ;
	for ( let i=0 ; i < hoverIndex ; i++ ) {
		sum += linksWidth[i];
	}
  sum+= linksWidth[hoverIndex] / 2 ;
  sum+= hoverIndex * 35 ;
	console.log(sum);
	return sum ;
};


const NavbarWrapper = () => {
  const [ hover , setHover ] = useState(false) ;
	const [ hoverIndex , setHoverIndex ] = useState(0);
	const [ first , setFirst ] = useState(-1) ;
  const [ open , setOpen ] = useState(false) ;
  return (
    <Navbar>
      <Logo />
      <Hamburger open={open} setOpen={setOpen} />
      <NavbarLinks
        onMouseLeave={() => {
          setHover(false)
          setFirst(-1)
        }}
        onMouseOver={() => {
          setHover(true)
        }}
      >
          <BackgroundBar
            opacity={hover ? "1" : "0"}
            left={leftFunction(hoverIndex)}
            first={first}
          />
          { links.map((link , index) => (
              <Link
                onMouseOver={() => {
                setHoverIndex(index);
                setFirst(first+1)
              }}
              >{link}</Link>
          ))}
      </NavbarLinks>
    </Navbar>
  );
};


export default NavbarWrapper ;
