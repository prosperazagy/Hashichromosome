import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function LoginForm() {

	const [test, setTest] = useState('wahad');

	return (
		<Container>
			<Form>
				<Form.Group controlId="token">
					<Form.Control type="text" placeholder="Token" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
  		</Button>
			</Form>
		</Container>
	);
}
