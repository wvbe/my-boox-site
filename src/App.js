import React from 'react';

import {
	css,
	Section,
	Typography
} from './branding/system';

import {
	Paragraph,
	Button,
	Icon
} from './branding/components';

import logoUrl from './Myboox_logo_800.png';

function App() {
	return <Section
		themeTypography
		themeBackground
		horizontal
		align='center'
		verticalAlign='center'
		className={css`
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		`}
	>
	<Section horizontal spaceBetween='large'>
		<Section fluid padding='medium'>
			<Section className={{width: '100%', maxWidth: '400px' }} vertical spaceBetween='small'>
				<img
					src={logoUrl}
					alt='MyBoox logo'
					// @TODO: Resize the actual image too
					style={{ width: '300px', marginBottom: 0 }}
				/>

				<Typography slightlyBold>Boekhouding opgelost. Erg praktisch.</Typography>

				<Section spaceBetween='small' horizontal>
					<Button
						label={'Neem contact op'}
						iconBefore='comment'
						dropShadow
					/>
					<Button
						label={'Ga naar e-boekhouding'}
						iconBefore='rocket'
						dropShadow
					/>
				</Section>

				<Section horizontal spaceBetween='small'>
					<Section>
						<Icon dimmed name='envelope-o' /><Typography dimmed inline slightlyBold slightlySmaller> vraag@myboox.nl</Typography>
					</Section>
					<Section>
						<Icon dimmed name='whatsapp' /><Typography dimmed inline slightlyBold slightlySmaller> 06 - 1234 5678</Typography>
					</Section>
					<Section>
						<Icon dimmed name='whatsapp' /><Typography dimmed inline slightlyBold slightlySmaller> 06 - 0987 6543</Typography>
					</Section>
				</Section>
			</Section>
		</Section>

		<Section align='center' verticalAlign='center' fluid padding='medium'>
			<Section className={{width: '100%', maxWidth: '400px' }} spaceBetween='medium'>
				<Section>
					<Typography extraBold slightlySmaller>FACILITEERT</Typography>
					<Paragraph>Wij bieden jou de ruimte je op je werk te concentreren.</Paragraph>
				</Section>

				<Section>
					<Typography extraBold slightlySmaller>ASSISTEERT</Typography>
					<Paragraph>De administratie? Die nemen wij voor rekening.</Paragraph>
				</Section>

				<Section>
					<Typography extraBold slightlySmaller>REGISSEERT</Typography>
					<Paragraph>Met onze tips haal je het beste uit jouw onderneming.</Paragraph>
				</Section>
			</Section>
		</Section>
	</Section>
</Section>;
}

export default App;
