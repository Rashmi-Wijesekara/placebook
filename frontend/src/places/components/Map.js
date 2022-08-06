import React, {useRef, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

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
		<div ref={mapRef} className="">MAP here</div>
		// <div className="">
		// 	<GoogleMapReact
		// 		bootstrapURLKeys={{
		// 			key: "AIzaSyAN9zbYJKdlq9ZPp2JMH-ms9_3uzXytK2k",
		// 		}}
		// 		defaultCenter={center}
		// 		center={center}
		// 		defaultZoom={zoom}
		// 		margin={[50, 50, 50, 50]}
		// 	></GoogleMapReact>
		// </div>
	);

}

export default Map