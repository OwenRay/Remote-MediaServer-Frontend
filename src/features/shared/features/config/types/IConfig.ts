import { object, string } from 'yup';

export interface IConfig {
	apiEndpoint: string;
}

export const publicConfigSchema = object({
	apiEndpoint: string().required(),
});
