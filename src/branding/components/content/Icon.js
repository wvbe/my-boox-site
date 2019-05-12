import React from 'react';

import { injectGlobal, Typography } from '../../system';


injectGlobal`
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
`;

export default function Icon ({ name, className, ...typographyProps }) {
	return <Typography
		className={['fa', 'fa-' + name, className].join(' ')}
		noSelect
		inline
		slightlySmaller
		{...typographyProps}
	/>
}