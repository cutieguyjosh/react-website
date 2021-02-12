import React from 'react';
import Banner from '../components/Banner';
import { Form, Button, Container } from 'react-bootstrap';
import '../App.css';



export default function Contact() {
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
      			<h5 class="long-copy"> For more questions and inquiries regarding my services, feel free to contact me by completing the form below and I will get back to you as soon as I can. </h5>
      			<hr />
			</div>
		</div>
		<Container id="contactform" className="formSize">
			<div>
			<Form>
				<Form.Group controlId="name">
					<Form.Label></Form.Label>
					<Form.Control type="name" placeholder="Full Name" required/>
				</Form.Group>

				<Form.Group controlId="number">
					<Form.Label></Form.Label>
					<Form.Control type="number" placeholder="Contact No." required/>
				</Form.Group>

				<Form.Group controlId="email">
					<Form.Label></Form.Label>
					<Form.Control type="email" placeholder="E-Mail" required/>
				</Form.Group>

				<textarea class="inputform" type="text" name="Message" placeholder="Message">
				</textarea>
				<div>
				<button class="inputform" type="submit" value="submit">Submit</button>
				</div>
				<div>
				</div>
			</Form>
			</div>
		</Container>
		</React.Fragment>
	)
}