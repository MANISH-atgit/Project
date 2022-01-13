
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Division = styled.div`
// width 100%
// display: flex;
// justify-content: center;
// border: 1px solid red;
margin-bottom: 8px;
`;


export const Nav = styled.nav`
font-family: 'Open Sans', sans-serif;
background: #d0d7dd;
height: 50px;
width: 40%;
margin: 0px;
margin-left: 420px;
display: flex;
justify-content: space-between;
z-index: 12;
box-shadow: 1px 1px 0px 0 #CCCCCC;
`;

export const NavLink = styled(Link)`
color: #505050;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 20px;
height: 100%;
cursor: pointer;
&.active {
	background: #fff;
	border: 1px solid #d0d7dd;
	height: 49px;
}
&:hover {
	background: #F5F5F5;
}
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
`;


