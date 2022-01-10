import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Edit from './pages/Edit';
import Todos from './pages/Todos';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/todos' element={<Todos />} />
		<Route path='/edit' element={<Edit />} />
	</Routes>
	</Router>
);
}

export default App;
