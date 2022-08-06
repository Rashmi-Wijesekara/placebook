import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop"

import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";

const MainNavigation = (props) => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const openDrawerHandler = () => {
		setDrawerIsOpen(true);
	};

	const closeDrawerHandler = () => {
		setDrawerIsOpen(false);
	};

	return (
		<React.Fragment>
			{/* React.Fragment is a wrapper 
			which allows to wrap multiple html tags without using a html tag like div etc. */}

			{/* if drawerIsOpen === true; show the drawer */}
		
			{drawerIsOpen && (
				<Backdrop onClick={closeDrawerHandler} />
			)}
			
			<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
				<nav className="flex flex-col md:hidden">
					<NavLinks />
				</nav>
			</SideDrawer>
			
			<MainHeader>
				<div className="flex flex-row py-4">
					<button
						className="md:hidden"
						onClick={openDrawerHandler}
					>
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
		</React.Fragment>
	);
};

export default MainNavigation;
