import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader"

import {ReactComponent as MenuIcon} from "../../../assets/icons/menu.svg"

const MainNavigation = (props) => {
	return (
		<MainHeader>
			<button className="md:hidden">
				{/* hamburger menu icon*/}
				<MenuIcon className="w-6 h-6 stroke-2 fill-white m-5"/>
			</button>
			<h1 className="">
				<Link to="/">Your Places</Link>
			</h1>

			<nav>Links....</nav>
		</MainHeader>
	);
}

export default MainNavigation