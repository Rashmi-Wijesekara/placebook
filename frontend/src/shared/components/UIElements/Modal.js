import React from "react";

const Modal = (props) => {
	const closeModalHandler = () => {
		props.onClose(false)
	}

	return (
		<div onClick={closeModalHandler} className="fixed flex justify-center align-center inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto h-full w-full">
			<div
				className={`z-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${props.visible} mx-auto bg-white font-second p-8 rounded-xl shadow-xl`}
			>
				map here
			</div>
		</div>
	);
}

export default Modal