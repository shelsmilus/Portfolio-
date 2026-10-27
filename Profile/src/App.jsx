import { useState } from 'react';
import Loadingscreen from './Components/loadingscreen/Loadingscreen';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import MobileMenu from './Components/MobileMenu';
import Home from './Components/section/Home';
import About from './Components/section/About';
import Project from './Components/section/Project';
import Contact from './Components/section/Contact';
import './index.css';

function App() {
	const [loading, setLoading] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			{!loading && <Loadingscreen onComplete={() => setLoading(true)} />}
			{''}
			<Box
				className={`min-h-screen transition-opacity duration-700 ${loading ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}
			>
				<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<Home />
				<About />
				<Project />
				<Contact />
			</Box>
		</>
	);
}

export default App;
