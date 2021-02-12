import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import folder from '../images/folder2.png';
import skills from '../images/skills.png';
import contact from '../images/contact.png';

export default function Highlights() {
	return(
		<>
		<div className="description">
		<Card className="box1">
			<Card.Img variant="top" src={folder} />
			<Card.Body>
				<Card.Title>
					<Link to="./projects">
					<h2>Projects</h2>
					</Link>
				</Card.Title>
				<Card.Text>
					Check out the Projects page to see what projects Josh has made during his bootcamp training and also during his free time.
				</Card.Text>
			</Card.Body>
		</Card>
		<Card>
			<Card.Body className="box2">
			<Card.Img variant="top" src={skills} />
				<Card.Title>
				<Link to="./skills">
					<h2>Skills</h2>
					</Link>
				</Card.Title>
				<Card.Text>
					This page will display all the skills Josh has acquired during his training and also the programming languages he developed during his self-learning journey.
				</Card.Text>
			</Card.Body>
		</Card>
		<Card>
			<Card.Body className="box3">
			<Card.Img variant="top" src={contact} />
				<Card.Title>
					<Link to="./contact">
					<h2>Contact</h2>
					</Link>
				</Card.Title>
				<Card.Text>
					You can contact Josh for inquiries for his services which include making a full stack webpage for you, debbuging your codes, and making your static webpages into dynamic ones.
				</Card.Text>
			</Card.Body>
		</Card>
		</div>
		</>
	)
}