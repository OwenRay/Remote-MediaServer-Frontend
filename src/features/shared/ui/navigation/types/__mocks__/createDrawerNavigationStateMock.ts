import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { withDeepMerge } from '../../../../../../test-helpers/with-deep-merge';

const defaults: DrawerContentComponentProps['state'] = {
	key: '',
	default: 'open',
	type: 'drawer',
	index: 0,
	stale: false,
	routes: [],
	history: [],
	routeNames: [],
};

export const createDrawerNavigationStateMock = withDeepMerge(defaults);
