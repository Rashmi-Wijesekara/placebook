import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";

const MainNavigation = (props) => {
	return (
		<MainHeader>
			<div className="flex flex-row py-4">
				<button className="md:hidden">
					{/* hamburger menu icon*/}
					<MenuIcon className="w-6 h-6 stroke-2 fill-white ml-5" />
				</button>
				<h1 className="text-white font-mono text-xl font-bold my-auto pl-10">
					<Link to="/">PlaceBook</Link>
				</h1>

				<nav className="hidden md:block w-full">
					<NavLinks />
				</nav>
			</div>
		</MainHeader>
	);
};

export default MainNavigation;
