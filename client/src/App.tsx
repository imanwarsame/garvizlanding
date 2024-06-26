import { ThemeProvider, CssBaseline, Hidden } from '@mui/material';
import { lightTheme, darkTheme } from '../theme';
import { useDevStore } from './store';
import { useEffect, useState } from 'react';
import Splash from './components/splash/Splash';
import { AnimatePresence } from 'framer-motion';
import Home from './components/home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import MobileHome from './components/home/MobileHome';

export default function App() {
	const { darkMode } = useDevStore();
	const location = useLocation();
	const [loading, setLoading] = useState(location.pathname === '/' ? true : false);
	const theme = darkMode ? darkTheme : lightTheme;

	console.log(`

	░░      ░░░░      ░░░       ░░░  ░░░░  ░░        ░░        ░
	▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒  ▒▒
	▓  ▓▓▓   ▓▓  ▓▓▓▓  ▓▓       ▓▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓
	█  ████  ██        ██  ███  █████    ███████  ██████  ██████
	██      ███  ████  ██  ████  █████  █████        ██        █			   
			
	`);

	useEffect(() => {
		if (location.pathname === '/') {
			(async () => {
				setTimeout(() => {
					setLoading(false);

					document.body.style.cursor = 'default';

					window.scrollTo(0, 0);
				}, 2000);
			})();
		} else {
			setLoading(false);
			document.body.style.cursor = 'default';
		}
	}, [location.pathname]);

	return (
		<ThemeProvider theme={theme}>
			{/* Globally resets CSS to create a baseline to build on. enableColorScheme allows 
				switching between "light" and "dark" modes of native components such as scrollbar */}
			<CssBaseline enableColorScheme />
			<AnimatePresence mode='wait'>{location.pathname === '/' && loading && <Splash />}</AnimatePresence>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Hidden mdUp>
								<MobileHome />
							</Hidden>
							<Hidden mdDown>
								<Home />
							</Hidden>
						</>
					}
				/>
			</Routes>
		</ThemeProvider>
	);
}
