import React from "react";
import PlaceList from "../components/PlaceList";

const PLACES = [
	{
		id: "p1",
		title: "Colombo City Centre",
		description:
			"Upscale shopping center featuring high-end shops, an international food court & a multiplex cinema.",
		image:
			"https://i.pinimg.com/originals/b8/c5/e9/b8c5e97977452e1c1e8944aae2349f23.jpg",
		address: "137 Sir James Pieris Mawatha, Colombo 00200",
		coordinates: {
			lat: 6.9175917,
			lng: 79.8529722,
		},
		creatorId: "u1",
	},
	{
		id: "p2",
		title: "Colombo City Centre",
		description:
			"Upscale shopping center featuring high-end shops, an international food court & a multiplex cinema.",
		image:
			"https://i.pinimg.com/originals/b8/c5/e9/b8c5e97977452e1c1e8944aae2349f23.jpg",
		address: "137 Sir James Pieris Mawatha, Colombo 00200",
		coordinates: {
			lat: 6.9175917,
			lng: 79.8529722,
		},
		creatorId: "u2",
	},
];

const UserPlaces = () => {
	return <PlaceList items={PLACES} />;
};

export default UserPlaces;
