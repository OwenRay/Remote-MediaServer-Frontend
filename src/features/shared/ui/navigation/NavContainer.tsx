import React, { type ReactNode } from 'react';

import { Appbar, Text } from 'react-native-paper';

export const NavContainer = ({ children }: { children: ReactNode }) => (
	<Appbar.Header>
		<Text>test</Text>
		{children}
	</Appbar.Header>
);
