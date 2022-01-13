import React from 'react';
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/index";
import Edit from './components/pages/Edit';
import Todos from './components/pages/Todos';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/todos' element={<Todos />} />
	</Routes>
	</Router>
);
}

export default App;