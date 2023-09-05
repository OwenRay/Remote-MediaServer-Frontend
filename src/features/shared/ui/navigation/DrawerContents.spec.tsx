import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { DrawerContents } from './DrawerContents';
import { createDrawerNavigationHelpersMock } from './types/__mocks__/createDrawerNavigationHelpersMock';
import { createDrawerNavigationStateMock } from './types/__mocks__/createDrawerNavigationStateMock';

describe('DrawerContents', () => {
	it('Shows the home route', () => {
		// Act
		const { getByText } = render(
			<DrawerContents
				state={createDrawerNavigationStateMock()}
				navigation={createDrawerNavigationHelpersMock()}
				descriptors={{}}
			/>,
		);

		// Assert
		expect(getByText('Home')).toBeTruthy();
	});
	it('navigates clicking the home route', () => {
		// Arrange
		const navigate = jest.fn();
		const { getByText } = render(
			<DrawerContents
				state={createDrawerNavigationStateMock()}
				navigation={createDrawerNavigationHelpersMock({ navigate })}
				descriptors={{}}
			/>,
		);

		// Act
		fireEvent.press(getByText('Home'));

		// Assert
		expect(navigate).toHaveBeenCalledWith('Home');
	});
});
