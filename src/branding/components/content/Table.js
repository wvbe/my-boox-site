import React, { Component } from 'react';

import { css, length, Color, createTheme, ThemeContext } from '../../system';

const themes = createTheme({
	// Gives the section a slight background meant to go with the theme foreground color
	themeBackground: css`
		background-color: ${Color.white};
	`,

	tableStyling: css`
		table-layout: fixed;
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0px;
	`,

	cellStyling: css`
		border: 1px solid ${Color.fontoSilver};
		padding: ${length.tiny}
	`,
	headerCellStyling: css`
		font-weight: 800;
	`
});

themes.addVariation('whiteOnPink', {
	themeBackground: css`
		background-color: ${Color.hardOranje};
	`,

	cellStyling: css`
		border: 1px solid ${Color.white};
		padding: ${length.tiny}
	`
});

export class Table extends Component {
	static contextType = ThemeContext;

	render () {
		return <table className={ themes.getRule(this.context, 'tableStyling') }>
			<tbody>
				{ this.props.children }
			</tbody>
		</table>
	}
}

export class Row extends Component {
	static contextType = ThemeContext;

	render () {
		return <tr>{ this.props.children }</tr>;
	}
}

export class Cell extends Component {
	static contextType = ThemeContext;

	render () {
		return <td
			// In browser, these CSS rules are sufficient
			className={[
				themes.getRule(this.context, 'cellStyling'),
				this.props.isHeader ? themes.getRule(this.context, 'headerCellStyling') : null
			].join(' ')}
			// But for PDF, Prince needs @valign
			valign='top'
		>{ this.props.children }</td>;
	}
}