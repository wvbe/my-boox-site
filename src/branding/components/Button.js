import React, { useContext, useState } from 'react';
import Icon from './content/Icon';
import {
	ThemeContext,
	Section,
	Typography,
	Color,
	css
} from '../system';

export default function Button ({
	iconBefore = null,
	iconAfter = null,
	fullWidth = false,

	// Passed on to Taxonomy
	noWrap,
	ellipsis,

	small,
	padding = small ? 'tiny' : 'small',

	colorName = 'white',
	activeColorName = 'hardWit',

	backgroundColorName = 'hardOranje',
	activeBackgroundColorName = 'zachtOranje',

	borderColorName = 'hardOranje',
	activeBorderColorName = 'hardOranje',

	children,
	label,

	...sectionProps
}) {
	const [isHovered, setIsHovered] = useState(false);

	const basicStyling = css`
		box-sizing: border-box;
		display: ${fullWidth ? 'flex' : 'inline-flex'};
		text-align: center;
		background-color: ${Color[backgroundColorName]};
		border: 1px solid ${Color[borderColorName]};

		&:hover {
			cursor: pointer;
			background-color: ${Color[activeBackgroundColorName]};
			border-color: ${Color[activeBorderColorName]};
		}
	`;

	return <Section
		themeTypography
		className={basicStyling}
		padding={ padding }
		borderRadius
		horizontal
		align='center'
		verticalAlign='center'
		spaceBetween={ padding }
		onMouseEnter={() => setIsHovered(true)}
		onMouseLeave={() => setIsHovered(false)}
		{...sectionProps}
	>
		{
			iconBefore && <Icon
				dropShadow={ sectionProps.dropShadow }
				name={iconBefore}
				colorName={ isHovered ? activeColorName || colorName : colorName }
			/>
		}

		{
			label ?
				<Typography
					colorName={ isHovered ? activeColorName || colorName : colorName }
					noSelect
					noWrap={ noWrap }
					ellipsis={ ellipsis }
					slightlySmaller={small}
					slightlyBold
					dropShadow={ sectionProps.dropShadow }
				>{ label }</Typography> :
				children
		}

		{
			iconAfter && <Icon
				name={iconAfter}
				colorName={ isHovered ? activeColorName || colorName : colorName }
			/>
		}
	</Section>;
}
