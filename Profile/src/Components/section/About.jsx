import React from 'react';
import { Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';
import ReviewonScroll from '../ReviewonScroll';

const About = () => {
	const skills = [
		{ name: 'React' },
		{ name: 'JavaScript' },
		{ name: 'HTML' },
		{ name: 'CSS' },
		{ name: 'Tailwind CSS' },
		{ name: 'Material-UI' },
		{ name: 'Git' },
		{ name: 'scss' },
	];

	return (
		<Box
			id="about"
			className="relative flex min-h-screen items-center justify-center py-20"
		>
			<ReviewonScroll>
				<Box className="mx-auto max-w-4xl px-4">
					<h2 className="to-black-400 mb-7 flex items-center justify-center bg-linear-to-r from-blue-500 to-green-400 bg-clip-text text-4xl font-bold text-transparent">
						About Me
					</h2>

					<Box className="hover-translate-y-1 rounded-lg border border-white/10 p-6 shadow-md transition-all">
						<p className="mb-6 text-gray-400">
							I'm a passionate frontend developer with a strong
							focus on creating engaging user experiences. With
							over two years of experience, I've honed my skills
							in React, JavaScript, and modern web technologies.
						</p>
						<Box className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<Box className="rounded-xl p-6 transition-all hover:-translate-y-1">
								<h3 className="mb-4 text-xl font-bold">
									Frontend
								</h3>
								<Box className="flex flex-wrap gap-3">
									{skills.map((skill, index) => (
										<span
											key={index}
											className="hover: shadow[0_2px_8px_rgba(59, 130, 246, 0.2)] rounded-full bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-500 transition hover:bg-blue-500/20"
										>
											{skill.name}
										</span>
									))}
								</Box>
							</Box>
						</Box>
					</Box>
					<Box className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						<Box className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 md:h-fit">
							<h3 className="mb-4 text-xl font-bold">
								<MenuBookIcon />
								Education
							</h3>

							<ul>
								<li>
									<strong>
										National Diploma in Computer Engineering
									</strong>{' '}
									federal Polytechnic,(2019 - 2022)
								</li>
							</ul>
						</Box>
						<Box className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
							<h3 className="mb-4 text-xl font-bold">
								<WorkIcon />
								Work Experience
							</h3>
							<Box className="space-y-4 text-gray-400">
								<h4 className="font-semibold">
									Frontend Developer (Independent Projects)
									*2024 — Present* | *Remote*
								</h4>
								<p>
									Built and shipped responsive, user-centric
									web applications utilizing modern JavaScript
									frameworks and styling architectures.
									Focused on translating visual concepts into
									clean, maintainable code.
								</p>
								<ul className="list-disc pl-5">
									<li>
										<strong>UI/UX Implementation:</strong>
										Translated complex UI/UX designs into
										semantic, fully responsive React
										interfaces using Material UI (MUI),
										Tailwind CSS, and SCSS/SASS.
									</li>
									<li>
										<strong>Modern Workflows:</strong>
										Managed full project lifecycles,
										codebase architecture, branching
										strategies, and continuous deployments
										using Git and GitHub.
									</li>
									<li>
										<strong>
											Data Integration (Current Focus):
										</strong>{' '}
										Just started learning and implementing
										RESTful API integrations to transition
										static interfaces into dynamic,
										data-driven applications.
									</li>
									<li>
										<strong>
											Performance Optimization (Current
											Focus):
										</strong>{' '}
										Just started learning how to conduct
										performance audits via Google Lighthouse
										to optimize component re-renders and
										improve application load times.
									</li>
								</ul>
							</Box>
						</Box>
					</Box>
				</Box>
			</ReviewonScroll>
		</Box>
	);
};

export default About;
