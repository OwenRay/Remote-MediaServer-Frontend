import { validateFunctionMock } from './validateFunctionMock';

describe('validateFunctionMock', () => {
	it('should throw an error when a function is not a mock', () => {
		// Arrange
		const foo = () => {};

		// Act & Assert
		expect(() => validateFunctionMock(foo)).toThrow(
			"The function 'foo' should be mocked. ",
		);
	});

	it('should not throw an error when a function is a mock', () => {
		// Arrange
		const foo = jest.fn();

		// Act & Assert
		expect(() => validateFunctionMock(foo)).not.toThrow();
	});
});
