import React from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import photo from '../images/body2.png';

export default function Banner({data}) {
	const { title, content, destination, label } = data;

	return(
		<Row>
			<Col>
				<Jumbotron>
					<div className="flex-row">
						<div class="intro">
						<h1>{title}</h1>
						<p>{content}</p>
						<Link className="learnMore" to={destination}><h4>{label}</h4></Link>
						</div>
						<div class="picture">
						<img className="self-photo" src={photo} alt="self"/>
						</div>
					</div>
				</Jumbotron>
			</Col>
		</Row>
	)
}