import React from "react";

// parent container must be relative positioned

export const ScrollTarget = React.forwardRef(({ id, offset }, ref) => (
	<div
		id={id}
		style={{ position: "absolute", top: offset, left: 0 }}
		ref={ref}
	>{``}</div>
));
