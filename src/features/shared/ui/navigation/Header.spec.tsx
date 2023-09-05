import React from 'react';

import { DrawerHeaderProps } from '@react-navigation/drawer';
import { fireEvent, render } from '@testing-library/react-native';

import { AppContextMock } from '../../../../test-helpers/AppContextMock';
import { DeepPartial } from '../../../../test-helpers/deep-partial';

import { Header } from './Header';

describe('header', () => {
	const renderHeader = (
		navigation: DeepPartial<DrawerHeaderProps['navigation']>,
	) => {
		return render(
			<AppContextMock>
				<Header
					layout={{} as any}
					options={{} as any}
					route={{} as any}
					navigation={navigation as any}
				/>
			</AppContextMock>,
		);
	};

	it('shows an iconButton that opens the drawer when pressed', () => {
		// Arrange
		const openDrawer = jest.fn();
		const { getByRole } = renderHeader({ openDrawer });

		// Act
		fireEvent.press(getByRole('button'));

		// Assert
		expect(openDrawer).toHaveBeenCalled();
	});

	it('displays the app title', () => {
		// Arrange
		const openDrawer = jest.fn();

		// Act
		const { getByText } = renderHeader({ openDrawer });

		// Assert
		expect(getByText('REMOTE')).toBeTruthy();
	});
});
