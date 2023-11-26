import { withDeepMerge } from '../../../../../test-helpers/with-deep-merge';

const defaults: Response = {
	headers: { get: jest.fn() } as any,
	status: 0,
	url: '',
	redirected: false,
	statusText: '',
	type: 'default',
	ok: false,
	clone: jest.fn(),
	body: null,
	bodyUsed: false,
	arrayBuffer: jest.fn(),
	blob: jest.fn(),
	formData: jest.fn(),
	json: jest.fn(),
	text: jest.fn(),
};

export const createMockHttpResponse = withDeepMerge(defaults);
