import React from 'react';
import Navbar from "./Components/Navbar";
import HeroVideo from './Components/HeroVideo';
import AboutUs from './Components/AboutUs';
import OurServices   from './Components/OurServices';
import OurVideo from './Components/OurVideo';
import Team from './Components/Team';
import Contact from './Components/Form';
import Footer from './Components/Footer';
import Clients from './Components/Clients';
import Career from './Components/Career';


function App() {
	return (
		<React.Fragment>
			<Navbar />
			<HeroVideo />
			<AboutUs />
			<OurServices />
			<OurVideo />
			<Team />
			<Clients />
			<Career />
			<Contact />
			<Footer />
		</React.Fragment>
	);
}

export default App;