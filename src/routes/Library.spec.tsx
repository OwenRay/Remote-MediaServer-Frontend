import { LibraryRoute } from './Library';

describe('Home', () => {
	it('has the right name, path and icon', () => {
		// Assert
		expect(LibraryRoute).toEqual({
			path: '/library',
			Component: expect.any(Function),
			name: 'Library',
			icon: 'filmstrip-box-multiple',
		});
	});
});
