import React from 'react';

import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Drawer, ThemeProvider } from './features/shared/ui';
import * as routes from './routes';

export const App = () => {
	return (
		<ThemeProvider>
			<SafeAreaProvider style={{ backgroundColor: 'black' }}>
				<StatusBar style="auto" />
				<Drawer routes={Object.values(routes)} />
			</SafeAreaProvider>
		</ThemeProvider>
	);
};

registerRootComponent(App);
