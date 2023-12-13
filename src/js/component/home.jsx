import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./cards";
import Footer from "./footer";



//create your first component
const Home = () => {
	return (
		<div className="">
			<div className="mt-3 p-3 navegacion text-white">
			<Navbar />
		</div>
			
			<Jumbotron />

			<div className="d-flex flex-wrap space">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="mt-5 p-5">
			<Footer />
		</div>
		</div >
	);
};

export default Home;
