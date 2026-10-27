import React from 'react';
import { Box, Button } from '@mui/material';
import ReviewonScroll from '../ReviewonScroll';

const Home = () => {
	return (
		<Box
			id="home"
			className="relative flex min-h-screen items-center justify-center bg-black text-white"
		>
			<ReviewonScroll>
				<Box className="z-10 px-4 text-center">
					<h1 className="loading-right mb-6 bg-linear-to-r from-blue-500 to-green-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
						Welcome to My Portfolio <br />
						<span>I'm Osbert</span>
					</h1>

					<p className="mx-auto mb-8 max-w-lg text-lg text-gray-400 md:text-xl">
						Hi, I’m a self-taught Frontend Developer with 2-years
						and 8-months of experience under my belt. I started out
						mastering web layouts, and I'm currently polishing the
						UI/UX design of my latest project. Now, I’m stepping
						into the engine under the hood—just starting to learn
						API integrations and performance optimization in React.
						I thrive on turning raw ideas into smooth, highly
						functional user experiences.
					</p>
					<Box className="flex justify-center gap-4 space-x-4">
						<Button
							variant="contained"
							color="primary"
							href="#project"
							sx={{
								backgroundColor: '#3025fd',
								borderRadius: '5px',
								color: '#f6f6f8',
								'&:hover': {
									boxShadow: '0 4px 6px rgb(172, 183, 247)',
									transform: 'translateY(-3px)',
								},
							}}
						>
							View My Work
						</Button>
						<Button
							variant="outlined"
							color="primary"
							href="#contact"
							sx={{
								borderRadius: '5px',
								borderColor: '#3025fd',
								color: '#3025fd',
								fontsize: '16px',
								'&:hover': {
									borderColor: '#3025fd',
									color: '#3025fd',
									boxShadow: '0 4px 6px rgb(52, 82, 250)',
									transform: 'translateY(-3px)',
								},
							}}
						>
							Contact Me
						</Button>
					</Box>
				</Box>
			</ReviewonScroll>
		</Box>
	);
};

export default Home;
