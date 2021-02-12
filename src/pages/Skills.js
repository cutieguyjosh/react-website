import React from 'react';
import Banner from '../components/Banner';
import { Container, Card } from 'react-bootstrap';
import '../App.css';


export default function Skills() {
	const pageData = {
		title: "Josh Aguas | Web Developer",
		content: "The next BIG thing in TECH",
		destination: "/projects",
		// label: "Learn More!"
	}

	return(
		<React.Fragment>
			<Banner data={pageData}/>
			<div class="container" id="main-section">
	      		<div class="row">
	      			<h3 class="long-copy"> These are the skills that I have acquired during my training in the coding bootcamp.  </h3>
				</div>
			</div>
			<Container className="container-skills">
				<div className="front-end">
					<h1 className="language-color"> Frontend Languages </h1>
					<br />
					<h2>HTML</h2>
					<p>HTML is used to create electronic documents (called pages) that are displayed on the World Wide Web.</p>
					<div>
						<div className="skills html">75%</div>	
					</div>
					<br />
					<h2>CSS</h2>
					<p> Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML.</p>
					<div>
						<div className="skills css">72%</div>	
					</div>
					<br />
					<h2>Javascript</h2>
					<p>JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.</p>
					<div>
						<div className="skills js">77%</div>	
					</div>
					<br />
					<h2>REACT JS</h2>
					<p>React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components.</p>
					<div>
						<div className="skills react">75%</div>	
					</div>
					<br />
					<h2>NEXT JS</h2>
					<p>Next js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.</p>
					<div>
						<div className="skills next">75%</div>	
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div className="back-end">
					<h1 className="language-color"> Backend Languages </h1>
					<br />
					<h2>NODE JS</h2>
					<p>Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. </p>
					<div>
						<div className="skills node">70%</div>	
					</div>
					<br />
					<h2>EXPRESS JS</h2>
					<p> Express JS is a back end web application framework for Node. js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.</p>
					<div>
						<div className="skills express">73%</div>	
					</div>
					<br />
					<h2>MONGO DB</h2>
					<p>MongoDB is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents.</p>
					<div>
						<div className="skills mongo">75%</div>	
					</div>
					<br />
					<h2>POSTMAN</h2>
					<p>Postman is a Google Chrome app for interacting with HTTP APIs. It presents you with a friendly GUI for constructing requests and reading responses.</p>
					<div>
						<div className="skills postman">76%</div>	
					</div>
					<br />
					<br />
				</div>
			</Container>
		</React.Fragment>
	)

}