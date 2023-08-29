import React from 'react';

import { DrawerHeaderProps } from '@react-navigation/drawer';
import { Appbar, IconButton, Text } from 'react-native-paper';
import styled from 'styled-components';

import { Logo } from '../assets';
import { View } from '../layout/View';

export const Header = ({ navigation }: DrawerHeaderProps) => {
	return (
		<Appbar.Header dark>
			<IconButton
				iconColor="white"
				icon="menu"
				onPress={() => {
					navigation.openDrawer();
				}}
			/>
			<Appbar.Content
				title={
					<StyledBar>
						<Logo style={{ height: 35, width: 35 }} />
						<Text variant={'titleLarge'}>REMOTE</Text>
					</StyledBar>
				}
			/>
		</Appbar.Header>
	);
};

const StyledBar = styled(View)`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 10px;
	align-self: center;
`;
