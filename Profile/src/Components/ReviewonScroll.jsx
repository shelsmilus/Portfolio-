import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

const RevealOnScroll = ({ children }) => {
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					ref.current.classList.add('visible');
				}
			},
			{ threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) observer.disconnect();
		};
	}, []); // Empty dependency array runs this effect only once on mount

	return (
		<Box ref={ref} className="reveal">
			{children}
		</Box>
	);
};

export default RevealOnScroll;
