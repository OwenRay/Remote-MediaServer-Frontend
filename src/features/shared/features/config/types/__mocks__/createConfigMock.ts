import { withDeepMerge } from '../../../../../../test-helpers/with-deep-merge';
import { IConfig } from '../IConfig';

const defaults: IConfig = {
	apiEndpoint: '-',
};

export const createConfigMock = withDeepMerge(defaults);
