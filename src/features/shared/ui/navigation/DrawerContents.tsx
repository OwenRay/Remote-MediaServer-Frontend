import React from 'react';

import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerStatus } from '@react-navigation/routers/lib/typescript/src/DrawerRouter';
import { SafeAreaView } from 'react-native';
import { Drawer as PaperDrawer, MD3Theme, withTheme } from 'react-native-paper';

import * as routes from '../../../../routes';
import { ScrollView } from '../layout/ScrollView';
import { styled } from '../styled';

export const DrawerContents = (props: DrawerContentComponentProps) => {
	const history = props.state.history.filter(({ type }) => type === 'route');
	const last = history[history.length - 1];
	const currentRoute = props.state.routes.find(
		(route) => isRoute(last) && route.key === last.key,
	);

	return (
		<StyledDrawerContentScrollView>
			<SafeAreaView>
				{Object.values(routes).map((route) => (
					<PaperDrawer.Item
						key={route.name}
						label={route.name}
						icon={route.icon}
						active={currentRoute?.name === route.name}
						onPress={() => {
							props.navigation.navigate(route.name);
						}}
					/>
				))}
			</SafeAreaView>
		</StyledDrawerContentScrollView>
	);
};

const StyledDrawerContentScrollView = withTheme(styled(ScrollView)<{
	theme: MD3Theme;
}>`
	background-color: ${({ theme }) => theme.colors.backdrop};
	height: 100%;
	overflow: auto;
`);

const isRoute = (
	maybeRoute:
		| {
				type: 'route';
				key: string;
		  }
		| {
				type: 'drawer';
				status: DrawerStatus;
		  },
): maybeRoute is {
	type: 'route';
	key: string;
} => {
	return maybeRoute.type === 'route';
};
