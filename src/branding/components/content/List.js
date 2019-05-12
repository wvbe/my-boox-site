import React from 'react';

import { Typography, Section, length } from '../../system';

export function List (props) {
	return <Section {...props} />;
}

export function ListItem ({ prefix = '•', children }) {
	return <Section horizontal>
		<Typography
			colorName='grey'
			style={{
				width: length.line,
				flexShrink: 0
			}}>
			{ prefix }
		</Typography>
		<Section fluid>{ children }</Section>
	</Section>;
}