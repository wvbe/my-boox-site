import React from 'react';
import logo from './logo.svg';
import './App.css';

// https://color.adobe.com/nl/search?q=reliable
// <palette>
// 	<color name=Portrait-of-two-silly-engineers-1 rgb='193559' r='24' g='52' b='89' />
// 	<color name=Portrait-of-two-silly-engineers-2 rgb='1F5373' r='30' g='82' b='114' />
// 	<color name=Portrait-of-two-silly-engineers-3 rgb='F2F2F0' r='241' g='242' b='239' />
// 	<color name=Portrait-of-two-silly-engineers-4 rgb='BFB8AA' r='191' g='183' b='170' />
// 	<color name=Portrait-of-two-silly-engineers-5 rgb='A67665' r='165' g='118' b='101' />
// </palette>
import {
	css,
	length,
	Section,
	Typography
} from './branding/system';
import {
	Paragraph,
	List,
	ListItem
} from './branding/components';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();
function App() {
	return <Section
		themeTypography
		themeBackground
		horizontal
		className={css`
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		`}
	>
		<Section align='center' verticalAlign='center' className={css`
			width: 50%;
		`}>
			<Section>
				<Typography extraLarge colorName='black'>MyBoox</Typography>
				<Typography>(t1) { lorem.generateWords(2)}</Typography>
			</Section>
		</Section>

		<Section vertical verticalAlign='center' fluid className={`
			padding: 4em 4em 4em 0;
		`}>
			<Section className={`
				margin: ${length.medium} 0;
			`}>
				<Typography slightlyBold>(t2){ lorem.generateWords(1)}</Typography>
				<Paragraph>(t3){ lorem.generateSentences(2)}</Paragraph>
			</Section>

			<Section className={`
				margin: ${length.medium} 0;
			`}>
				<Typography slightlyBold>(t4){ lorem.generateWords(1)}</Typography>
				<Paragraph>(t5){ lorem.generateSentences(1)}</Paragraph>
				<List>{
					Array.from(new Array(3)).map((x, i) => <ListItem key={ i }>{lorem.generateWords(3)}</ListItem>)
				}</List>
			</Section>
		</Section>
	</Section>;
}

export default App;
