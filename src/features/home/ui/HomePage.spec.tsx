import React from 'react';

import { render } from '@testing-library/react';

import { AppContextMock } from '~/test-helpers/AppContextMock';

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
					})}
				/>
			</AppContextMock>,
		);

	it('', () => {
		// Act
		const { getByText } = renderComponent();

		// Assert
		expect(getByText('')).toBeInTheDocument();
	});
});
