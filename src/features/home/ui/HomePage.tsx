import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Button, Card, FAB } from 'react-native-paper';

import { type IHomePageViewModel } from './HomePageViewModel';

type IHomePageProps = {
	viewModel: IHomePageViewModel;
};

export const HomePage = ({ viewModel: {} }: IHomePageProps) => (
	<Card style={{ margin: 10 }}>
		<StatusBar />
		<Button onPress={console.log}>test</Button>
		<Text>Open up App.tsx to start working on your app!</Text>
		{/*<IconButton icon={'menu'} />*/}
		<FAB
			variant="secondary"
			icon="plus"
			onPress={() => {
				console.log('Pressed');
			}}
		/>
	</Card>
);
