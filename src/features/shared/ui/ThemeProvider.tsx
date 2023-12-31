import React, { type ReactNode } from 'react';

import { DefaultTheme, Provider } from 'react-native-paper';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const primaryColor = '#1c1d36';
// const primaryColorLight = '#534c67';
const primaryColorDark = '#0a0c1a';
const secondaryColor = '#b8a300';

// const secondaryColorLight = '#e8ce00';
// const secondaryColorDark = '#9c8a00';

export const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: primaryColor,
		primaryContainer: primaryColor,
		onPrimary: 'white',
		onPrimaryContainer: 'white',
		secondary: secondaryColor,
		secondaryContainer: secondaryColor,
		onSecondary: 'white',
		background: primaryColor,
		surface: primaryColor,
		backdrop: primaryColorDark,
		backgroundColor: primaryColorDark,
		onBackground: 'white',
		inversePrimary: 'white',
		text: 'white',
		onSurface: 'white',
		onSurfaceVariant: 'white',
		inverseSurface: 'pink',
		onSurfaceDisabled: 'red',
		surfaceVariant: primaryColor,
		inverseOnSurface: 'orange',
	},
};

/**
 *
 * $primary-color: #1c1d36;
 * $primary-color-light: #534c67;
 * $primary-color-dark: #0a0c1a;
 * $secondary-color: #b8a300;
 */

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Provider theme={theme}>
			<StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
		</Provider>
	);
};
