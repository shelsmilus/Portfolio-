import { memo, useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const Loadingscreen = ({ onComplete }) => {
	const [text, setText] = useState('');
	const fulltext = '<Loading... />';

	// Use a ref to store the latest onComplete callback
	// This prevents the useEffect from re-triggering if the parent component re-renders
	const onCompleteRef = useRef(onComplete);

	useEffect(() => {
		onCompleteRef.current = onComplete;
	}, [onComplete]);

	useEffect(() => {
		let index = 0;

		const interval = setInterval(() => {
			setText(fulltext.substring(0, index + 1));
			index++;

			// Changed from > to === to trigger exactly when typing finishes
			if (index === fulltext.length) {
				clearInterval(interval);

				setTimeout(() => {
					onCompleteRef.current();
				}, 1000);
			}
		}, 100);

		return () => clearInterval(interval);
	}, []); // Empty dependency array ensures the typing animation only runs once

	return (
		// Fixed typo: changed "insert-0" to "inset-0"
		<Box className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-gray-100">
			<Box className="mb-6 font-mono text-2xl font-bold">
				{text}
				<span className="animate-blink ml-1">|</span>
			</Box>
			<Box className="relative h-[2px] w-[200px] overflow-hidden rounded bg-gray-800">
				<Box className="animate-loading-bar h-full w-[40%] bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]" />
			</Box>
		</Box>
	);
};

export default memo(Loadingscreen);
