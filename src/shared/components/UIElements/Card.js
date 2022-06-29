import React from "react";

const Card = (props) => {
	return (
		<div
			className="bg-amber-500 max-w-xs rounded-3xl shadow-lg mx-auto my-4
		hover:scale-110 hover:shadow-2xl transform duration-300 cursor-pointer group font-mono"
		>
			{props.children}
		</div>
	);
};

export default Card;
