import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='App bg-background-0 min-h-lvh'>
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
