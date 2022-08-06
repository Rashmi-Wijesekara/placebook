import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
	return (
		<ul
			className="mt-10 md:mt-0
		flex flex-col md:flex-0 md:flex-row gap-12 ml-10"
		>
			<li className="font-mono font-semibold text-lg text-amber-200">
				<NavLink
					to="/"
					exact
					activeClassName="border-b-2 border-amber-200 pb-2 transform duration-500"
				>
					ALL USERS
				</NavLink>
			</li>
			<li className="font-mono font-semibold text-lg text-amber-200">
				<NavLink
					to="/u1/places"
					activeClassName="border-b-2 border-amber-200 pb-2 transform duration-500"
				>
					MY PLACES
				</NavLink>
			</li>
			<li className="font-mono font-semibold text-lg text-amber-200">
				<NavLink
					to="/places/new"
					activeClassName="border-b-2 border-amber-200 pb-2 transform duration-500"
				>
					ADD PLACE
				</NavLink>
			</li>
			<li className="font-mono font-semibold text-lg text-amber-200">
				<NavLink
					to="/auth"
					activeClassName="border-b-2 border-amber-200 pb-2 transform duration-500"
				>
					AUTHENTICATE
				</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
