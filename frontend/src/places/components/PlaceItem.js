import React, {useState} from "react";

import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal"
import Map from "./Map"

const PlaceItem = (props) => {

	const [openModal, setOpenModal] = useState(false)

	const viewMapHandler = () => {
		setOpenModal(true)
	}
	const closeModalHandler = (status) => {
		setOpenModal(status)
	}

	return (
		<React.Fragment>
		<li className="">
			<Card>
				<div className="image">
					<img
						src={props.image}
						alt={props.title}
						className="rounded-xl my-3"
					/>
				</div>
				<div className="info">
					<h2 className="font-bold text-xl text-white text-center mb-4">
						{props.title}
					</h2>
					<h3 className="text-slate-700 font-semibold">
						{props.address}
					</h3>
					<p className="my-4 text-sm ">
						{props.description}
					</p>
				</div>
				<div className="actions">
					<div className="flex">
						<button onClick={viewMapHandler} className="text-white font-semibold text-lg bg-amber-400 px-5 py-2 rounded-xl my-3 mx-auto w-fit hover:shadow-xl active:translate-y-2 hover:scale-95 transform duration:300">
							View On Map
						</button>
					</div>
					<div className="flex justify-center gap-8">
						<button className="text-white font-semibold text-lg bg-amber-400 px-5 py-2 rounded-xl my-3 hover:shadow-xl hover:scale-95 active:translate-y-2 transform duration:300">
							Edit
						</button>
						<button className="text-white font-semibold text-lg bg-red-600 px-5 py-2 rounded-xl my-3 hover:shadow-xl hover:scale-95 active:translate-y-2 transform duration:300">
							Delete
						</button>
					</div>
				</div>
			</Card>
		</li>

		{openModal && <Modal open={openModal} onClose={closeModalHandler}>
			<div className="">
			<Map center={props.coordinates} zoom={16} />
			</div>
		</Modal>}
		</React.Fragment>
	);
};

export default PlaceItem;
