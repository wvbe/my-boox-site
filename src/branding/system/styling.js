import {
	injectGlobal
} from 'emotion';

injectGlobal(`
	a {
		text-decoration: inherit;
	}
`);

export {
	css,
	keyframes,
	injectGlobal
} from 'emotion';

export const lengthUnit = 'px';
export const lengthInUnits = {
	tiny:   24 / 4,
	small:  24 / 2,
	line:   1 * 24,
	medium: 2 * 24,
	mediumLarge: 3 * 24,
	large:  4 * 24
}, length = Object.keys(lengthInUnits).reduce((lengths, lengthName) => ({
	...lengths,
	[lengthName]: lengthInUnits[lengthName] + lengthUnit
}), {});