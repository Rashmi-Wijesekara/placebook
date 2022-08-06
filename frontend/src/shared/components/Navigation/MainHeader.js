import React from "react";

const MainHeader = (props)=> {
	return (
		<header className="bg-amber-600">
			{props.children}
		</header>
	);
}

export default MainHeader