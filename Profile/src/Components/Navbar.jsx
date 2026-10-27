import { memo, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ menuOpen, setMenuOpen }) => {
	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
	}, [menuOpen]);

	return (
		<nav className="fixed top-0 left-0 z-40 w-full border-b border-white/10 bg-[rgba(10,10,10,0.8)] p-4 text-white shadow-lg backdrop-blur-lg">
			<Box className="mx-auto max-w-5xl px-4">
				<Box className="flex h-10 items-center justify-between">
					<a href="#home" className="text-lg font-bold">
						<h2>
							Real<span className="text-blue-500">-Osbibi</span>
						</h2>
					</a>

					{/* Hides the MenuIcon when menuOpen is true */}
					<Box
						className={`transition-opacity duration-200 md:hidden ${
							menuOpen
								? 'pointer-events-none opacity-0'
								: 'opacity-100'
						}`}
					>
						<IconButton
							onClick={() => setMenuOpen(true)}
							aria-label="Open menu"
							color="inherit"
							size="small"
							sx={{
								borderRadius: '0.375rem', // 6px
								backgroundColor: 'rgba(36, 92, 194, 0.89)',
								'&:hover': {
									backgroundColor: 'rgba(36, 92, 194, 0.89)',
								},
							}}
						>
							<MenuIcon />
						</IconButton>
					</Box>

					{/* Desktop Menu */}
					<Box className="hidden items-center space-x-6 md:flex">
						<a
							href="#home"
							className="text-gray-300 transition-colors hover:text-blue-500"
						>
							Home
						</a>
						<a
							href="#about"
							className="text-gray-300 transition-colors hover:text-blue-500"
						>
							About
						</a>
						<a
							href="#project"
							className="text-gray-300 transition-colors hover:text-blue-500"
						>
							Projects
						</a>
						<a
							href="#contact"
							className="text-gray-300 transition-colors hover:text-blue-500"
						>
							Contact
						</a>
					</Box>
				</Box>
			</Box>
		</nav>
	);
};

export default memo(Navbar);
