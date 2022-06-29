import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
	// when there's no any users
	if (props.items.length === 0) {
		return (
			<Card>
				<h2 className="px-4 py-5 text-center font-semibold">No users found!</h2>
			</Card>
		);
	}

	return (
		<ul className="users-list">
			{props.items.map((user) => (
				<UserItem
					key={user.id}
					id={user.id}
					image={user.image}
					name={user.name}
					placeCount={user.places}
				/>
			))}
		</ul>
	);
};

export default UsersList;
