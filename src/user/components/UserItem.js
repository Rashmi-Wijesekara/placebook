import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card"

const UserItem = (props) => {
	return (
		<li>
			<Card>
			<Link to={`/${props.id}/places`}>
				<div className="flex flex-row">
					<div className="rounded-full overflow-hidden w-20 h-20 border-4 border-yellow-500 group-hover:border-yellow-400">
						<img
							src={props.image}
							alt={props.name}
							className="object-cover object-center"
						/>
					</div>
					<div className="my-auto ml-10">
						<h2 className="text-md font-bold">
							{props.name}
						</h2>
						<h3 className="text-xs font-semibold text-slate-600">
							{props.placeCount}{" "}
							{props.placeCount === 1 ? "Place" : "Places"}
						</h3>
					</div>
				</div>
			</Link>
			</Card>
		</li>
	);
};

export default UserItem;
