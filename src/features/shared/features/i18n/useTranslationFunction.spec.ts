import { renderHook } from '@testing-library/react-native';

import { useTranslationFunction } from './useTranslationFunction';

describe('useTranslationFunction', () => {
	it('just returns the string for now', () => {
		// Arrange
		const inputString = 'some text';
		const { result } = renderHook(() => useTranslationFunction());

		// Act
		const outputString = result.current(inputString);

		// Assert
		expect(outputString).toEqual(inputString);
	});
});
