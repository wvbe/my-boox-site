import React from 'react';

import { injectGlobal, css, Typography } from '../../system';

export default function Icon ({ name, className, ...typographyProps }) {
	return <Typography
		className={['fa', 'fa-' + name, className].join(' ')}
		noSelect
		inline
		slightlySmaller
		{...typographyProps}
	/>
}