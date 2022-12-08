import PropTypes from "prop-types";

function Button({ text, name = "" }) {
	return (
		<button
			onClick={function () {
				console.log("Msj para kike");
			}}
		>
			{text}-{name}
		</button>
	);
}
Button.propType = {
	text: PropTypes.string.isRequired,
};

export default Button;
