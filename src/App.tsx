import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<h1>My Portfolio</h1>
			<Outlet />
		</div>
	);
}

export default App;
