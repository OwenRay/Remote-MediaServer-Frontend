import { DrawerNavigationHelpers } from '@react-navigation/drawer/src/types';

import { withDeepMerge } from '../../../../../../test-helpers/with-deep-merge';

const defaults: DrawerNavigationHelpers = {
	emit: jest.fn(),
	canGoBack: jest.fn(),
	getId: jest.fn(),
	jumpTo: jest.fn(),
	dispatch: jest.fn(),
	getParent: jest.fn(),
	goBack: jest.fn(),
	getState: jest.fn(),
	isFocused: jest.fn(),
	navigate: jest.fn(),
	reset: jest.fn(),
	setParams: jest.fn(),
	openDrawer: jest.fn(),
	closeDrawer: jest.fn(),
	toggleDrawer: jest.fn(),
};

export const createDrawerNavigationHelpersMock = withDeepMerge(defaults);
