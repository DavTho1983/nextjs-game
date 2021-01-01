import React from 'react';

export const Circle = ({xPos, yPos, fill }) => {

	return (
		
			<circle cx={xPos} cy={yPos} r="40" stroke="green" strokeWidth="4" fill={fill} />

	);
}

export default Circle;