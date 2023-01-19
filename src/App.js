import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';

function App() {
	const [selectedProject, setSelectedProject] = useState(false);

	return (
		<div className="App">
			<Header></Header>
			<ProjectList/>
			<Footer></Footer>
		</div>
	);
}

export default App;
