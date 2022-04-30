// parent container must be relative positioned

export const ScrollTarget = ({ id, offset }) => (
	<div id={id} style={{ position: "absolute", top: offset, left: 0 }}></div>
);
