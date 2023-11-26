import { withDeepMerge } from '~/test-helpers/withDeepMerge';

import { IApi } from '~/features/shared/features/api/createApi';
import { createUserMock } from '~/features/shared/features/api/types/__mocks__/createUserMock';

const defaults: IApi = {
	isAuthenticated: false,
	authenticate: jest.fn(),
	getAll: jest.fn(),
	logout: jest.fn(),
	getOne: jest.fn(),
	post: jest.fn(),
	get: jest.fn(),
	user: createUserMock(),
	tokenExpired: false,
	put: jest.fn(),
};

export const createApiMock = withDeepMerge(defaults);
