import React from "react";
import PlaceList from "../components/PlaceList";
import {useParams} from "react-router-dom"

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
		creatorId: 1,
	},
	{
		id: "p2",
		title: "Pidurangala",
		description:
			"Destination for moderate hikes & climbs to the top of the rock, popular for panoramic views.",
		image:
			"https://lh5.googleusercontent.com/p/AF1QipMHE5C1JRTXA8wGR92-nAW_mUieH037aaHu7uKH=w408-h291-k-no",
		address: "Sigiriya, Sri Lanka",
		coordinates: {
			lat: 7.9546782,
			lng: 80.7442354,
		},
		creatorId: 2,
	},
];

const UserPlaces = () => {
	const userId = useParams().uid
	console.log(userId)
	
	const loadedPlaces = PLACES.filter(
		place => place.creatorId == userId
	)
	console.log(loadedPlaces)
	return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
