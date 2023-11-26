import { IConfig, publicConfigSchema } from './types/IConfig';

export const createGetConfig = () => {
	return (): Promise<IConfig> => {
		return publicConfigSchema.validate({
			apiEndpoint: '/',
		} as IConfig);
	};
};
