import { css, keyframes, length, Color } from '../system';
import React from 'react';

const spinnerKeyframes = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;


export default function Spinner ({ size = 'medium', colorName = 'black', trackColorName = 'transparent' }) {
	const basicStyling = css`
		flex-shrink: 0 !important;
		font-size: 10px;
		position: relative;
		border-top: 1px solid ${Color[trackColorName]};
		border-right: 1px solid ${Color[trackColorName]};
		border-bottom: 1px solid ${Color[trackColorName]};
		border-left: 1px solid ${Color[colorName]};
		transform: translateZ(0);
		box-sizing: border-box;
		animation: ${spinnerKeyframes} 0.3s infinite linear;

		&,
		&:after {
			border-radius: 50%;
			width: ${length[size]};
			height: ${length[size]};
		}
	`;

	return <div className={basicStyling} />;
}