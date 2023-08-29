import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import { DrawerContents } from './DrawerContents';
import { Header } from './Header';
import { IRoute } from './types/IRoute';

const { Navigator, Screen } = createDrawerNavigator();

export const Drawer = ({ routes }: { routes: IRoute[] }) => {
	const theme = useTheme();
	const screens = routes.reduce((acc, route) => {
		acc[route.name] = route.path;
		return acc;
	}, {} as { [key: string]: string });
	return (
		<NavigationContainer
			linking={{
				prefixes: [],
				config: { screens },
			}}
		>
			<Navigator
				drawerContent={DrawerContents}
				screenOptions={{
					header: Header,
					sceneContainerStyle: { backgroundColor: theme.colors.backdrop },
				}}
			>
				{routes.map(({ Component, name }) => (
					<Screen
						key={name}
						getComponent={() => Component}
						name={name}
						options={{
							drawerLabel: name,
							title: name,
						}}
					/>
				))}
			</Navigator>
		</NavigationContainer>
	);
};
