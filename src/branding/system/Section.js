import { css, length, lengthInUnits } from './styling';
import Theme, { ThemeContext, createTheme } from './Theme';
import React, { Component } from 'react';
import Color from './Color';

const sectionTheme = createTheme({
	// The themeTypography style for text is sized to line height. The font size is 2/3rd of that length
	themeTypography: css`
		font-family: 'Fira Sans', sans-serif;
		font-weight: 300;
		font-size: ${lengthInUnits.line * (2/3)}${length.unit};
		line-height: ${length.line};
		color: ${Color.fontoPurple};
	`,

	// Gives the section a slight background meant to go with the theme foreground color
	themeBackground: css`
		background-color: ${Color.white};
	`,

	// Gives the section a slight background meant to go with the theme foreground color
	themeBorder: css`
		border: 1px solid ${Color.fontoSilver};
	`,

	dropShadow: css`
		box-shadow: 0px 3px 10px -8px rgba(0,0,0,0.5);
	`,

	borderRadius: css`
		border-radius: 3px;
	`
});

sectionTheme.addVariation('warningConnotation', {
	// From FDS
	themeTypography: css`
		color: #f57c00;
	`,
	themeBackground: css`
		background-color: #fef1e5;
	`,
	themeBorder: css`
		border: 1px solid #fab573;
	`
});

sectionTheme.addVariation('informativeConnotation', {
	themeTypography: css`
		color: #1976d2;
	`,
	themeBackground: css`
		background-color: #e7f0fb;
	`,
	// Gives the section a slight background meant to go with the theme foreground color
	themeBorder: css`
		border: 1px solid #80b2e5;
	`
});

sectionTheme.addVariation('whiteOnPink', {
	themeTypography: css`
		color: ${Color.white};
	`,

	themeBackground: css`
		background-color: ${Color.hardOranje};
	`,
	// Gives the section a slight background meant to go with the theme foreground color
	themeBorder: css`
		border: 1px solid ${Color.white};
	`,
});

function mergeStylingProps (theme, props, className = null) {
	const rules = [];

	const stuccoStyles = sectionTheme.getRuleNames()
		.filter(property => !!props[property])
		.map(property => sectionTheme.getRule(theme, property));

	if (props.verticalAlign === 'center') {
		rules.push(css`
			display: flex;
			${props.horizontal ? 'align-items: center' : 'justify-content: center' }
		`);
	}
	if (props.align === 'center') {
		rules.push(css`
			display: flex;
			${props.horizontal ? 'justify-content: center' : 'align-items: center' }
		`);
	}
	if (props.horizontal) {
		rules.push(css`
			display: flex;
			flex-direction: row;
		`);
	}
	else if (props.vertical) {
		rules.push(css`
			display: flex;
			flex-direction: column;
		`);
	}
	if (props.scrollContainer) {
		rules.push(css`
			overflow: auto;
		`);
	}
	if (props.fluid) {
		rules.push(css`
			flex: 1 1 100%;
		`);
	}
	else {
		rules.push(css`
			flex: 0 0 auto;
		`);
	}

	if (props.padding) {
		rules.push(css`
			padding: ${length[props.padding]}
		`);
	}

	if (props.spaceBetween) {
		if (props.spaceBetween === 'fill') {
			rules.push(css`
				justify-content: space-between;
			`);
		}
		if (props.spaceBetween === 'equal') {
			rules.push(css`
				justify-content: space-evenly;
			`);
		}
		else {
			rules.push(css`
				> * {
					margin-${props.horizontal ? 'right' : 'bottom'}: ${length[props.spaceBetween]};

					&:last-child {
						margin-${props.horizontal ? 'right' : 'bottom'}: 0;
					}
				}
			`);
		}
	}

	return rules.reduce((all, rule) => css`${rule};${all}`, css`${stuccoStyles};${className}`);
}

export default class Section extends Component {
	static contextType = ThemeContext;

	renderSection = (theme) => {
		const { children, className, id, style, onRef, onClick, onMouseEnter, onMouseLeave, ...stylingProps } = this.props;

		// Because a new theme is set, set the themeTypography also. Do not set themeBackground or themeBorder
		if (this.props.theme) {
			stylingProps.themeTypography = true;
		}

		return <div
			id={ id }
			style={ style }
			ref={onRef}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={ mergeStylingProps(theme, stylingProps, className) }
		>
			{ children }
		</div>;
	}

	render () {
		const { theme } = this.props;
		return theme !== undefined ?
			<Theme name={ theme }>{ this.renderSection(theme) }</Theme> :
			this.renderSection(this.context);
	}
}

export function renderSection ({ idGenerator, ...props }) {
	return ({ key, traverse, documentId }) => (
		<Section key={ key() } id={ idGenerator ? idGenerator(documentId, key()) : null } { ...props }>
			{ traverse() }
		</Section>
	);
}