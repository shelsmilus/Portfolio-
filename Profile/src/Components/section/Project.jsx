import React from 'react';
import { Box } from '@mui/material';
import ReviewonScroll from '../ReviewonScroll';

const Project = () => {
	return (
		<Box
			id="project"
			className="flex min-h-screen items-center justify-center py-20"
		>
			<ReviewonScroll>
				<Box className="mx-auto max-w-5xl p-4">
					<h2 className="to-black-400 mb-7 flex items-center justify-center bg-linear-to-r from-blue-500 to-green-400 bg-clip-text text-4xl font-bold text-transparent">
						Featured Projects
					</h2>

					<Box className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<Box className="rounded-lg border border-white/10 p-6 shadow-md transition-all hover:translate-y-1">
							<h3 className="mb-4 text-xl font-bold">
								E-commerce Platform
							</h3>
							<p className="hover: shadow[0_2px_8px_rgba(59, 130, 246, 0.2)] flex items-center justify-center gap-3 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-500 transition hover:bg-blue-500/20">
								React | Tailwind CSS
							</p>
							<p className="text-gray-600">
								A modern frontend e-commerce solution built with
								React to deliver a highly interactive, seamless
								shopping experience. This project serves as a
								showcase of my frontend core skills, focusing on
								responsive layouts, strict UI/UX design
								implementation, and robust code functionality
								using Tailwind CSS, React Router, and React
								Hooks. The project is designed to be fully
								responsive, ensuring optimal performance across
								various devices and screen sizes.
							</p>
							<a
								href="https://github.com/shelsmilus/Ecommerce"
								className="mt-3 inline-block font-semibold text-blue-500 hover:underline"
							>
								View Project
							</a>
						</Box>
						<Box className="rounded-lg border border-white/10 p-6 shadow-md transition-all hover:translate-y-1">
							<h3 className="mb-4 text-xl font-bold">
								Admin Dashboard
							</h3>
							<p className="flex items-center justify-center gap-3 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
								React | Tailwind CSS | Material-UI
							</p>
							<p className="text-gray-600">
								A comprehensive, responsive administrative panel
								engineered to showcase advanced data layout
								architectures and state management. This project
								serves as a core showcase of my frontend skills,
								focusing on heavy UI/UX design implementation,
								complex layout functionalities, and view routing
								using Tailwind CSS, Material-UI, React Router,
								and React Hooks. The workspace is built
								completely out of static data models to practice
								layout fidelity across complex tables and view
								management.
							</p>
							<a
								href="https://github.com/shelsmilus/DashBoard"
								className="mt-3 inline-block font-semibold text-blue-500 hover:underline"
							>
								View project
							</a>
						</Box>
						<Box className="rounded-lg border border-white/10 p-6 shadow-md transition-all hover:translate-y-1">
							<h3 className="mb-4 text-xl font-bold">
								Weather App
							</h3>
							<p className="flex items-center justify-center gap-3 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
								JavaScript(ES6+) | HTML | CSS | OpenWeather API
							</p>
							<p className="text-gray-600">
								A clean, lightweight weather application built
								using JavaScript and raw CSS. This project
								serves as my foundational introduction to
								working with external data streams, focusing on
								handling asynchronous programming, managing live
								HTTP fetch requests, and parsing JSON responses
								from the OpenWeather API. The user interface
								provides real-time atmospheric updates while
								maintaining layout responsiveness across
								multiple device screens.
							</p>
							<a
								href="https://github.com/shelsmilus/Weather--web"
								className="mt-3 inline-block font-semibold text-blue-500 hover:underline"
							>
								View project
							</a>
						</Box>
						<Box className="rounded-lg border border-white/10 p-6 shadow-md transition-all hover:translate-y-1">
							<h3 className="mb-4 text-xl font-bold">
								Restaurant Website
							</h3>
							<p className="flex items-center justify-center gap-3 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
								JavaScript(ES6+) | HTML | SCSS
							</p>
							<p className="text-gray-600">
								A highly responsive and visually rich web
								interface built for a modern dining
								establishment. This project serves as a key
								showcase of my advanced styling skills, focusing
								on modular SCSS architecture, fluid animations,
								custom navigation menus, and clean layout
								fidelity. JavaScript is utilized to handle core
								frontend functionalities such as dynamic cart
								calculations, filterable menu components, and
								seamless smooth-scrolling behavior.
							</p>
							<a
								href="https://github.com/shelsmilus/Restaurant-website"
								className="mt-3 inline-block font-semibold text-blue-500 hover:underline"
							>
								View project
							</a>
						</Box>
					</Box>
				</Box>
			</ReviewonScroll>
		</Box>
	);
};

export default Project;
