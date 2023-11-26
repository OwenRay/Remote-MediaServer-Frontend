import React from 'react';

import { act, render } from '@testing-library/react-native';

import { validateFunctionMock } from '../../../../test-helpers/validateFunctionMock';

import { ConfigProvider } from './ConfigProvider';
import { createConfigMock } from './types/__mocks__/createConfigMock';

import { getConfig } from './index';

jest.mock('./index');
const mockedGetConfig = validateFunctionMock(getConfig);

describe('ConfigProvider', () => {
	it('renders loading text', async () => {
		// Arrange
		let resolveConfig: any;
		mockedGetConfig.mockReturnValue({
			then: (resolve: any) => {
				resolveConfig = resolve;
			},
		} as any);

		// Act
		const { getByText } = render(<ConfigProvider />);

		// Assert
		expect(getByText('Loading...')).toBeTruthy();

		// Cleanup
		act(() => resolveConfig(createConfigMock()));
	});

	// it('renders children when loaded', async () => {
	// 	// Arrange
	// 	let resolveConfig: any;
	// 	mockedGetConfig.mockReturnValue({
	// 		then: (resolve: any) => {
	// 			resolveConfig = resolve;
	// 		},
	// 	} as any);
	// 	const { getByText } = render(<ConfigProvider>children</ConfigProvider>);
	// 	await waitForNextRender(); // make sure the onMount is triggered
	//
	// 	// Act
	// 	act(() => resolveConfig(createConfigMock()));
	//
	// 	// Assert
	// 	expect(getByText('children')).toBeInTheDocument();
	// });
});
