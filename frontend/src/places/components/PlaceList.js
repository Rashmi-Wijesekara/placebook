import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
	if (props.items.length === 0)
		return (
			<Card>
				<h2>No Places found. Create One!</h2>
				<button>Share Place</button>
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
