import { withDeepMerge } from '../../../../../../test-helpers/with-deep-merge';
import { IRoute } from '../IRoute';

const defaults: IRoute = {
	path: '',
	icon: '',
	name: '',
	Component: jest.fn().mockReturnValue(null),
};

export const createRouteMock = withDeepMerge(defaults);
