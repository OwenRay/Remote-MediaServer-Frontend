import React from 'react';

import {
	createDrawerNavigator,
	type DrawerContentComponentProps,
	DrawerContentScrollView,
	type DrawerHeaderProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Drawer, Appbar, IconButton, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from './features/shared/ui';

type RootStackParamList = {
	Home: undefined;
	Profile: undefined;
	Feed: undefined;
};

const NavDrawer = createDrawerNavigator<RootStackParamList>();

// Must be exported or Fast Refresh won't update the context
export const App = () => {
	// Const ctx = require.context('./routes');
	// return <ExpoRoot context={ctx} />;

	return (
		<ThemeProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					<NavDrawer.Navigator
						drawerContent={DrawerContents}
						screenOptions={{
							header: Header,
						}}
						initialRouteName={'Home'}
					>
						<NavDrawer.Screen name="Home" component={() => <Text>test</Text>} />
						<NavDrawer.Screen
							name="Profile"
							component={() => <Text>test2</Text>}
						/>
					</NavDrawer.Navigator>
				</NavigationContainer>
				<StatusBar style="auto" />
			</SafeAreaProvider>
		</ThemeProvider>
	);
};

registerRootComponent(App);

const Header = ({ navigation }: DrawerHeaderProps) => (
	// Const {options} = scene.descriptor;
	// const title
	// 	= options.headerTitle !== undefined
	// 		? options.headerTitle
	// 		: options.title !== undefined
	// 			? options.title
	// 			: scene.route.name;

	<Appbar.Header>
		<IconButton
			icon={'hamburger'}
			onPress={() => {
				navigation.openDrawer();
			}}
		/>
		<Appbar.Content title={'test'} />
	</Appbar.Header>
);

const DrawerContents = (props: DrawerContentComponentProps) => (
	<DrawerContentScrollView style={{ backgroundColor: 'pink' }} {...props}>
		<Drawer.Item
			label={'test'}
			onPress={() => {
				props.navigation.navigate('Home');
			}}
		/>
		<Drawer.Item
			label={'test'}
			onPress={() => {
				props.navigation.navigate('Profile');
			}}
		/>
	</DrawerContentScrollView>
);
