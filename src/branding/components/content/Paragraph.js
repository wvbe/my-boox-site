import React from 'react';

import { Typography } from '../../system';

export default function Paragraph (props) {
	// Yes, Paragraph is currently only a 1-1 wrapper for Typography.
	return <Typography {...props} />;
}