import React from 'react';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import {Text} from 'ink';

export default function Index() {
	return (
		<>
			<Gradient name="morning">
				<BigText text="CLI_Insta" />
			</Gradient>
			<Text color="green">Simple Instagram CLI.</Text>
			<Text color="blue">
				Type &#39;cli-insta --help&#39; to see available commands.
			</Text>
		</>
	);
}
