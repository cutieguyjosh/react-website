import React from 'react';
import Banner from '../components/Banner';
import { Container, Card } from 'react-bootstrap';
import '../App.css';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.png';


export default function Projects() {
	const pageData = {
		title: "Josh Aguas | Web Developer",
		content: "The next BIG thing in TECH",
		destination: "/projects",
		// label: "Learn More!"
	}

	return (
		<React.Fragment>
			<Banner data={pageData}/>
			<div class="container" id="main-section">
	      		<div class="row">
	      			<h2 class="long-copy"> These are the projects that I have completed while doing coding bootcamp training at Zuitt. </h2>
	      			<hr />
				</div>
			</div>
			<Container className="container-projects">
				<div className="first-card">
					<img className="project1-pic" src={project1} />
					<a href="https://tuitt.gitlab.io/students/batch86/joshua-kyle-aguas/s08/cp1/"><h2> First Capstone - Perosnal Portfolio </h2></a>
					<h4>  </h4>
					<p> For our first capstone project, we were tasked to create a personal web portfolio of ourselves using HTML and CSS. This was the first time I had made a webpage from scratch so this project of mine will always be one of my favorites. </p>
				</div>
				<div className="second-card">
					<img className="project2-pic" src={project2} />
					<a href="https://cutieguyjosh.gitlab.io/capstone2/"><h2> Second Capstone - Bookeeping Webpage </h2></a>
					<h4>  </h4>
					<p className="project-p"> Our second capstone project was quite chellanging but at the same time very fulfilling. We made a webpage with both frontend and backend labguages used for this one. It was very hard at first but once we reached the end of the project, I was very hapyp with the outcame I have made. </p>
				</div>
				<div className="third-card">
					<img className="project3-pic" src={project3} />
					<a href="https://capstone3-front-end-personal.vercel.app/"><h2> Third Capstone - Budget Tracking App </h2></a>
					<h4>  </h4>
					<p className="project-p"> Our third and final capstone project was to create a Budget tracking app from scratch using both front and back end languages. For the frontend language, we used Javascript with the framework React Js and Next Js and for the backend we used Express Js, Node Js and MongoDB for our database. We also included a google login button so users with a google login do not need to register anymore. </p>
				</div>
			</Container>
		</React.Fragment>
	)
}