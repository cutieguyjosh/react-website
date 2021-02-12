import React from 'react';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';

import { Container } from 'react-bootstrap';

export default function Home() {
	const pageData = {
		title: "Josh Aguas | Web Developer",
		content: "The next BIG thing in TECH",
		destination: "/projects",
		// label: "Learn More!"
	}

	return(
		<React.Fragment>
			<Banner data={pageData}/>
			<Container>
				<Highlights/>
			</Container>
		</React.Fragment>
	)
}