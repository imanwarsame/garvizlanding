import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Landing from '../landing/Landing';
import Planet from '../planet/Planet';

export default function Home() {
	return (
		<Box
			component={motion.div}
			initial={{ opacity: 0 }} //Initial state (invisible)
			animate={{ opacity: 1 }} //Final state (fully visible)
			transition={{ duration: 1, ease: 'easeInOut' }} //Duration of the fade-in effect
			sx={{
				flexGrow: 1,
				transform: 'translateZ(0)', //Enables hardware acceleration
				bgcolor: 'background.default',
				WebkitOverflowScrolling: 'touch',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				overflow: 'hidden',
			}}
		>
			<Planet />
			<Landing />
		</Box>
	);
}
