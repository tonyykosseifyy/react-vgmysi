import styled from "styled-components";

export const ArrowDown = styled.div`
  position: relative ;
  opacity: ${({ scrolled }) => scrolled ? "0" : "1"} ;
  transition: .3s ease-out ;
  & > div {
    width: 4px ;
    height: 200px ;
    background-color: white ;
  }
`


export const HomeTitle = styled.h1`
  color: white;
  font-size: 3.1rem ;
  text-transform: uppercase ;
  margin: 50px auto 0 auto ;
  text-align: center;
  font-family: 'Fraunces', serif;
`

export const NavbarMobileLinks = styled.div`
  position: absolute ;
  top: 120px;
  width: 90vw ;
  margin: 0 auto ;
  background-color: white;
  height: ${props => props.open ? "237px" : "0px"}  ;
  overflow: hidden ;
  transition: .3s  cubic-bezier(0.18, 0.89, 0.32, 1.28) ;
  & > a {
    color: #99989F ;
    margin: 30px 0 ;
    text-align: center;
    font-size: 18px;
    transition: .3s ease-out ;
    position: relative ;
    z-index: 1;
  }
  & > a::before {
    position: absolute ;
    z-index: -1 ;
    width: 200px ;
    top: 50% ;
    left: 50% ;
    transform: translate(-50% , -50%);
    border-radius: 20px ;
    height: 40px ;
    background-color: #FBD601;
    opacity: 0 ;
    transition: .3s ease-out ;
    content: "";
  }
  & > a:hover , & > a:focus {
    color: black ;
    text-transform: uppercase ;
    font-family: 'Fraunces', serif;
  }
  & > a:hover::before , & > a:focus::before {
    opacity: 1;
  }
`

export const Navbar = styled.nav`
  display: flex ;
  justify-content: space-between ;
  align-items: center ;
  padding: 40px 4vw ;
	position: relative;
`

export const BackgroundBar = styled.div`
	position: absolute ;
	background-color: #6FCFFF ;
	border-radius: 18px ;
	width: 100px ;
	height: 38px ;
	top: 50% ;
	transform: translate(-50px , -50% );
  left: ${(props) => props.left}px;
  opacity : ${props => props.opacity};
  transition:${({ first }) => first ? ".3s ease-out" : "opacity .3s ease-out"}
`

export const NavbarLinks = styled.div`
	display: flex ;
  position: relative;
  @media (max-width: 680px) {
    display: none ;
  }
`
export const Link = styled.a`
	color: white;
	margin: 0 35px 0 0;
	cursor: pointer ;
	position: relative;
  display: block ;
`


export const MobileLink = styled(Link)`
  transition: ${({ open }) ? ".3s cubic-bezier(0.18, 0.89, 0.38, 1.04)" : "0s"} !important ;
  opacity: ${({ open }) => open ? "1" : "0"};
  transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"};
  transition-delay: .${(props) => props.open ? props.index + 1 : 0 }s !important ;
`

export const Logo = () => (
  <div className='logo'>
  <svg width="124" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z" fill="#FFF" fill-rule="nonzero"/></svg>
  </div>
);
