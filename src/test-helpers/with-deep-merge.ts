import merge from 'deepmerge';

import { DeepPartial } from './deep-partial';

export const withDeepMerge =
	<T>(original: T) =>
	(custom: DeepPartial<T> = {}) =>
		merge(original, custom as Partial<T>, {
			arrayMerge: (_, source) => source,
		});
