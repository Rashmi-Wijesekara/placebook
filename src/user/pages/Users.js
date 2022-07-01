import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: 1,
			name: "John Smith",
			image:
				"https://images.unsplash.com/photo-1584999734482-0361aecad844?auto=compress",
			places: 3,
		},
		{
			id: 2,
			name: "Daniel Scott",
			image:
				"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=compress",
			places: 9,
		},
		{
			id: 3,
			name: "Susan Robinson",
			image:
				"https://images.unsplash.com/photo-1495580621852-5de0cc907d2f?auto=compress",
			places: 6,
		},
		{
			id: 4,
			name: "Robert Martin",
			image:
				"https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=compress",
			places: 12,
		},
	];

	return <UsersList items={USERS} />;
};

export default Users;
