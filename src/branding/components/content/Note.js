import React from 'react';

import { Section } from '../../system';

import Icon from './Icon';

export default function Note ({
	theme,
	prefix,
	icon,
	children,
	className
}) {
	return <Section
		theme={ theme || undefined }
		themeBorder
		themeBackground
		borderRadius
		horizontal
		spaceBetween='small'
		padding='small'
		className={ className }
	>
		{ icon && <Section><Icon name={ icon } /></Section> }
		{ prefix && <Section>{ prefix }</Section> }
		<Section fluid>{ children }</Section>
	</Section>;
};