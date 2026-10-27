import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
	return (
		<Box
			// z-50 puts this overlay ABOVE the Navbar (z-40)
			className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgba(10,10,10,0.95)] text-white backdrop-blur-md transition-all duration-300 ease-in-out ${
				menuOpen
					? 'pointer-events-auto visible opacity-100'
					: 'pointer-events-none invisible opacity-0'
			}`}
		>
			{/* Close Button pinned strictly to the top right corner */}
			<IconButton
				onClick={() => setMenuOpen(false)}
				aria-label="Close menu"
				color="inherit"
				sx={{
					position: 'absolute',
					top: '1.25rem', // 20px from top
					right: '1.25rem', // 20px from right
					backgroundColor: 'rgba(36, 92, 194, 0.89)',
					'&:hover': {
						backgroundColor: 'rgba(36, 92, 194, 0.89)',
					},
				}}
			>
				<CloseIcon />
			</IconButton>

			{/* Mobile Nav Links */}
			<nav className="flex flex-col items-center space-y-6 text-xl font-medium">
				<a
					href="#home"
					onClick={() => setMenuOpen(false)}
					className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
				>
					Home
				</a>
				<a
					href="#about"
					onClick={() => setMenuOpen(false)}
					className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
				>
					About
				</a>
				<a
					href="#project"
					onClick={() => setMenuOpen(false)}
					className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
				>
					Projects
				</a>
				<a
					href="#contact"
					onClick={() => setMenuOpen(false)}
					className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
				>
					Contact
				</a>
			</nav>
		</Box>
	);
};

export default MobileMenu;
