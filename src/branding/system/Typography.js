import { css, length } from './styling';
import React, { Component } from 'react';
import Color from './Color';
import { ThemeContext, createTheme } from './Theme';

const themes = createTheme({
	// For example:
	// - (subsection subtitle) The subtitle of the "Our features" section on the front page
	extraSmall: css`
		font-size: 12px;
	`,

	slightlySmaller: css`
		font-size: 14px;
	`,

	// The base font size is line*2/3 = 16
	// For example:
	// - (subsection subtitle) The subtitle of the "Our features" section on the front page
	slightlyLarger: css`
		font-size: 20px;
		line-height: 26px;
	`,

	// For example:
	// - (main subtitle) The front page subtitle
	extraLarge: css`
		font-size: 30px;
		line-height: 40px;
	`,

	// For example:
	// - (subtitle) The "Our features" title for that section on the front page
	extraExtraLarge: css`
		font-size: 48px;
		line-height: 64px;
	`,

	// For example:
	// - (main title) The front page title
	superLarge: css`
		font-size: 60px;
		line-height: 80px;
	`,
	dimmed: css`
		color: ${Color.fontoSilver};
	`,
	slightlyDimmed: css`
		color: #999;
	`,
	slightlyBold: css`
		font-weight: 400;
	`,
	extraBold: css`
		font-weight: 700;
	`,
	italic: css`
		font-style: italic;
	`,
	underline: css`
		text-decoration: underline;
	`,
	superscript: css`
		vertical-align: super;
		font-size: 0.7em;
	`,
	subscript: css`
		vertical-align: sub;
		font-size: 0.7em;
	`,
	monospace: css`
		font-family: 'Ubuntu mono', monospace;
	`,
	alternateFont: css`
		font-family: 'Ubuntu', 'Fira Sans', sans-serif;
	`,
	noWrap: css`
		white-space: nowrap;
	`,
	ellipsis: css`
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	`,
	significantWhitespace: css`
		white-space: pre-wrap;
	`,

	hasOnClick: css`
		cursor: pointer;
	`,

	interactive: css`
		color: ${Color.fontoPink};
		text-decoration: underline;
	`,

	noSelect: css`
		user-select: none;
	`
});

themes.addVariation('whiteOnPink', {
	// dimmed: css`
	// 	color: ${Color.fontoSilver};
	// `,
	interactive: css`
		color: #ff8484;
		text-decoration: underline;
	`,
	// For example:
	// - (main subtitle) The front page subtitle
	extraLarge: css`
		font-size: 30px;
		line-height: 40px;
	`,
});
themes.addVariation('warningConnotation', {
	interactive: css`
		text-decoration: underline;
	`,
});
themes.addVariation('informativeConnotation', {
	interactive: css`
		text-decoration: underline;
	`,
});

export function getClassName (theme, props, className = null) {
	if (!props) {
		return className;
	}

	const stenoStyles = themes.getRuleNames()
		.filter(property => !!props[property])
		.map(property => themes.getRule(theme, property));

	const indentStyle = props.indent ?
		css`
			margin-left: ${length[props.indent]};
		` :
		null;

	// May override a property from styles.steno
	const colorStyle = props.colorName ?
		css`
			transition: color .25s;
			color: ${Color[props.colorName]};
		` :
		null;

	// May override a property from styles.steno
	const hoverColorStyle = props.activeColorName ?
		css`
			transition: color .25s;
			&:hover {
				color: ${Color[props.activeColorName]};
			}
		` :
		null;

	return [className, css`
		${stenoStyles};
		${indentStyle};
		${colorStyle};
		${hoverColorStyle};
	`].join(' ');
}
/**
 * Props:
 * @param {Boolean} [themeTypography] Enabled by default
 * @param {Boolean} [inline]
 * @param {Boolean} [base]
 * @param {Boolean} [slightlyLarger]
 * @param {Boolean} [extraLarge]
 * @param {Boolean} [dimmed]
 * @param {Boolean} [slightlyBold]
 * @param {Boolean} [extraBold]
 * @param {Boolean} [italic]
 * @param {Boolean} [code]
 * @param {Boolean} [inverted]
 * @param {Boolean} [interactive]
 * @param {Boolean} [noSelect]
 * @param {Color} [colorName]
 * @param {Color} [activeColorName]
 * @param {Length} [indent]
 */
export default class Typography extends Component {
	static contextType = ThemeContext;
	render () {
		const { children, inline, onRef, className, style, onClick, ...stylingProps } = this.props;
		return React.createElement(inline ? 'span' : 'div', {
			className: getClassName(this.context, stylingProps, className),
			ref: onRef,
			style,
			onClick
		}, children);
	}
}

export function renderTypography ({ onClick, ...rest }) {
	return ({ key, traverse, node }) => (
		<Typography key={ key() } onClick={ onClick ? event => onClick(node(), event) : null } { ...rest }>
			{ traverse() }
		</Typography>
	);
}
