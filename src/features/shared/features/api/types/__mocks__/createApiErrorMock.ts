import { withDeepMerge } from '../../../../../../test-helpers/with-deep-merge';
import { ApiError } from '../ApiError';

const defaults: ApiError = {
	error: {
		status: 0,
		message: '',
		name: '',
	},
};
export const createApiErrorMock = withDeepMerge(defaults);
