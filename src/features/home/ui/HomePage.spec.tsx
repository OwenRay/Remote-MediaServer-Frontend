import React from 'react';

import { render } from '@testing-library/react-native';

import { AppContextMock } from '../../../test-helpers/AppContextMock';
import { createTranslationFunctionMock } from '../../shared/features/i18n/types/__mocks__/createTranslationFunctionMock';

import { HomePage } from './HomePage';
import {
	type IHomePageViewModelProps,
	createHomePageViewModel,
} from './HomePageViewModel';

describe('HomePage', () => {
	const renderComponent = (viewModel?: Partial<IHomePageViewModelProps>) =>
		render(
			<AppContextMock>
				<HomePage
					viewModel={createHomePageViewModel({
						// T: createTranslationFunctionMock(),
						...viewModel,
						t: createTranslationFunctionMock(),
					})}
				/>
			</AppContextMock>,
		);

	xit('', () => {
		// Act
		const { getByText } = renderComponent();

		// Assert
		expect(getByText('')).toBeTruthy();
	});
});
