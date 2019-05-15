import React from 'react';

import {
	css,
	length,
	Typography
} from '../../system';

import {
	Icon
} from '../../components';

export default function Heading ({
	// 0 = map title, 1 = most topic titles, 2, 3
	// defaults to the deepest/smallest heading, Infinity.
	level = Infinity,

	// yay for topics, nay for sections in topics
	showIconInMargin,

	className,
	children,
	...rest
}) {
	return <Typography
		// As the headings level increases they get smaller, bolder and finally dimmer
		colorName={ level === 0 ? 'hardOranje' : null}
		extraExtraLarge={ level === 0}
		extraLarge={ level === 1}
		slightlyBold={ level >= 1 }
		slightlyLarger={ level === 2}
		slightlyDimmed={ level >= 3}

		className={css`
			position: relative;
			${className};
		`}
		{ ...rest }
	>
		{ showIconInMargin && <Icon name='chevron-right' dimmed className={css`
			position: absolute;
			left: -1cm;
			top: 50%;
			transform: translateY(-50%);
			margin-top: 3px;
		`} />}
		{ children }
	</Typography>
}