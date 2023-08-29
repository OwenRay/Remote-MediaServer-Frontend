import React from 'react';

import { act, render } from '@testing-library/react-native';

import { AppContextMock } from '../../../../test-helpers/AppContextMock';

import { Drawer } from './Drawer';
import { createRouteMock } from './types/__mocks__/createRouteMock';

jest.useFakeTimers();

describe('Drawer', () => {
	it('includes the drawerContents and renders the home button', async () => {
		// Act
		const { getByText } = render(
			<AppContextMock>
				<Drawer routes={[createRouteMock({ name: 'some name' })]} />
			</AppContextMock>,
		);
		await act(async () => undefined);

		// Assert
		expect(getByText('Home')).toBeTruthy();
	});

	it('includes the header and renders the title in it', async () => {
		// Act
		const { getByText } = render(
			<AppContextMock>
				<Drawer routes={[createRouteMock({ name: 'some name' })]} />
			</AppContextMock>,
		);
		await act(async () => undefined);

		// Assert
		expect(getByText('REMOTE')).toBeTruthy();
	});
});
