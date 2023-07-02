import { createHomePageViewModel } from './HomePageViewModel';

import { createTranslationFunctionMock } from '~/features/shared/i18n/types/__mocks__/createTranslationFunctionMock';

describe('HomePage', () => {
	it('', () => {
		// Arrange
		const t = createTranslationFunctionMock();

		// Act
		const result = createHomePageViewModel({ t });

		// Assert
		expect(result).toEqual({});
	});
});
