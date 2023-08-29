import React from 'react';

import { Text } from 'react-native-paper';

import { IRoute } from '../features/shared/ui/navigation/types/IRoute';

const Library = () => {
	return <Text>todo</Text>;
};

export const LibraryRoute: IRoute = {
	path: '/library',
	Component: Library,
	name: 'Library',
	icon: 'filmstrip-box-multiple',
};
