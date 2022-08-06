import React from "react";
import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
	const closeModalHandler = () => {
		props.onClose(false);
	};

	console.log(props.open);

	return (
		<React.Fragment>
			<div className="fixed flex justify-center align-center inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto h-full w-full"></div>
			<CSSTransition
				in={props.open}
				mountOnEnter
				unmountOnExit
				timeout={900}
			>
				<div
					className={`z-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto bg-white font-second p-8 rounded-xl shadow-xl`}
				>
					{props.children}
					<button
						onClick={closeModalHandler}
						className="text-slate-600 font-semibold text-lg bg-slate-100 px-5 py-2 rounded-xl my-3 hover:shadow-xl hover:scale-95 active:translate-y-2 transform duration:300"
					>
						Cancel
					</button>
				</div>
			</CSSTransition>
		</React.Fragment>
	);
};

export default Modal;
