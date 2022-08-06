import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
	if (props.items.length === 0)
		return (
			<Card>
				<h2>No Places found. Create One!</h2>
				<button className="text-white font-semibold text-lg bg-amber-400 px-5 py-2 rounded-xl my-3 w-fit mx-auto hover:shadow-xl active:translate-y-2 hover:scale-95 transform duration:300">
					Share Place
				</button>
			</Card>
		);

	return (
		<ul className="">
			{props.items.map((place) => (
				<PlaceItem
					key={place.id}
					id={place.id}
					image={place.image}
					title={place.title}
					description={place.description}
					address={place.address}
					creatorId={place.creatorId}
					coordinates={place.coordinates}
				/>
			))}
		</ul>
	);
};

export default PlaceList;
