import React from 'react';

export const Circle = ({xPos, yPos }) => {

	return (
		<svg width="100" height="100">
		<circle cx={xPos} cy={yPos} r="40" stroke="green" strokeWidth="4" fill="yellow" />
	  </svg>


	);
}

export default Circle;