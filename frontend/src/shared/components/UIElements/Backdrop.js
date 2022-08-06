import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	return ReactDOM.createPortal(
		<div
			className="fixed h-full w-screen mt-14 backdrop-blur-lg md:hidden z-40"
			onClick={props.onClick}
		></div>,
		document.getElementById("backdrop-hook")
	);
};

export default Backdrop;
