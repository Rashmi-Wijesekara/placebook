import React, {useRef, useEffect} from 'react';
// import GoogleMapReact from 'google-map-react';

const Map = (props) => {
	const mapRef = useRef()

	// object destructuring
	const {center, zoom} = props

	useEffect(() => {
		const map = new window.google.maps.Map(mapRef.current, {
			center: center,
			zoom: zoom,
		});

		new window.google.maps.Marker({
			position: center,
			map: map,
		});
	}, [center, zoom])

	return (
		<div ref={mapRef} className="w-[80vw] h-[50vh] md:w-96 md:h-96">MAP here</div>
	);

}

export default Map