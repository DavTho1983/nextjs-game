import React from 'react';

export const Room = ({ forwardedRef }) => {

	return (
		<svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="1000" height="750" fill="white"/>
			<path ref={forwardedRef} fill-rule="evenodd" clip-rule="evenodd" d="M449 51H49V343.92H172V611.942H214V713H949V430.332H884V165.239H449V51ZM520 436C558.66 436 590 404.66 590 366C590 327.34 558.66 296 520 296C481.34 296 450 327.34 450 366C450 404.66 481.34 436 520 436Z" fill="#C4C4C4"/>
		</svg>
	);
}

export default Room;