import React from 'react';

import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { HomePage } from '../features/home/ui/HomePage';
import { validateFunctionMock } from '../test-helpers/validateFunctionMock';

import { HomeRoute } from './Home';

jest.mock('../features/home/ui/HomePage');
const mockedHomePage = validateFunctionMock(HomePage);

describe('Home', () => {
	it('renders the HomePage', () => {
		// Arrange
		mockedHomePage.mockReturnValue(<Text>some text</Text>);

		// Act
		const { getByText } = render(<HomeRoute.Component />);

		// Assert
		expect(getByText('some text')).toBeTruthy();
	});

	it('has the right name, path and icon', () => {
		// Assert
		expect(HomeRoute).toEqual({
			path: '/',
			Component: expect.any(Function),
			name: 'Home',
			icon: 'home',
		});
	});
});
