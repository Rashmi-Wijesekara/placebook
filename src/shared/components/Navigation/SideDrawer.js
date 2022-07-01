import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
	const content = (
		<CSSTransition
			in={props.show}
			timeout={200}
			classNames="slide-in-left"
			mountOnEnter
			unmountOnExit
		>
			<aside
				className="fixed top-0 left-0 z-50 h-3/4 w-3/4 bg-amber-600 shadow-xl
		md:hidden mt-14 rounded-br-2xl"
				onClick={props.onClick}
			>
				{props.children}
			</aside>
		</CSSTransition>
	);

	return ReactDOM.createPortal(
		content,
		document.getElementById("drawer-hook")
	);
};

export default SideDrawer;
