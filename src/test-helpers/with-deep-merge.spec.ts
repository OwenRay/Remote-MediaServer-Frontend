import { withDeepMerge } from './with-deep-merge';

describe('withDeepMerge', () => {
	it('should return a function', () => {
		// Act
		const result = withDeepMerge({});

		// Assert
		expect(result).toBeInstanceOf(Function);
	});

	describe('deepMerge', () => {
		it('should deep merge an object', () => {
			// Arrange
			const deepMerge = withDeepMerge({
				a: {
					a1: 'a1',
					a2: 'a2',
				},
				b: {
					b1: 'b1',
				},
			});

			// Act
			const result = deepMerge({
				a: {
					a2: 'something new',
				},
			});

			// Assert
			expect(result).toEqual({
				a: {
					a1: 'a1',
					a2: 'something new',
				},
				b: {
					b1: 'b1',
				},
			});
		});

		it('should overwrite an array', () => {
			// Arrange
			const deepMerge = withDeepMerge({
				a: ['a1', 'a2'],
				b: ['b1'],
			});

			// Act
			const result = deepMerge({
				a: ['something new'],
			});

			// Assert
			expect(result).toEqual({
				a: ['something new'],
				b: ['b1'],
			});
		});
	});
});
