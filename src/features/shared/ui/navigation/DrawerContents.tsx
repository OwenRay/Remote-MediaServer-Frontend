import React from 'react';

import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Drawer as PaperDrawer, MD3Theme } from 'react-native-paper';

import * as routes from '../../../../routes';
import { ScrollView } from '../layout/ScrollView';
import { styled } from '../styled';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {DrawerStatus} from "@react-navigation/native";

export const DrawerContents = (props: DrawerContentComponentProps) => {
	const history = props.state.history.filter(({ type }) => type === 'route');
	const last = history[history.length - 1];
	const currentRoute = props.state.routes.find(
		(route) => isRoute(last) && route.key === last.key,
	);

	const {top} = useSafeAreaInsets();

	return (
		<StyledDrawerContentScrollView safeAreaTop={top}>
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
		</StyledDrawerContentScrollView>
	);
};

const StyledDrawerContentScrollView = styled(ScrollView)<{
	theme: MD3Theme;
	safeAreaTop: number;
}>`
	background-color: ${({ theme }) => theme.colors.backdrop};
	height: 100%;
	padding-top: ${({ safeAreaTop }) => safeAreaTop + 5}px;
`;

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
