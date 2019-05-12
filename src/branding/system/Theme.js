import React, { createContext } from 'react';

export const ThemeContext = createContext(null);

export default function Theme ({ name, children }) {
	return <ThemeContext.Provider value={ name }>
		{ children }
	</ThemeContext.Provider>;
};

export function createTheme (rules) {
	const baseRules = rules;
	const overrideRules = {};
	return {
		addVariation: (themeName, rules) => {
			overrideRules[themeName] = rules;
		},
		getRule: (themeName, ruleName) => {
			return (overrideRules[themeName] || baseRules)[ruleName] || baseRules[ruleName];
		},
		getRuleNames: () => Object.keys(baseRules)
	}
}