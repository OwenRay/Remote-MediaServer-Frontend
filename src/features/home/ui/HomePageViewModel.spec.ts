import { createTranslationFunctionMock } from '../../shared/features/i18n/types/__mocks__/createTranslationFunctionMock';

import { createHomePageViewModel } from './HomePageViewModel';

describe('HomePage', () => {
	it('', () => {
		// Arrange
		const t = createTranslationFunctionMock();

		// Act
		const result = createHomePageViewModel({ t });

		// Assert
		expect(result).toEqual({ test: '' });
	});
});
