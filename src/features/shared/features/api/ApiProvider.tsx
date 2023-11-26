import React, { createContext, ReactNode, useContext, useMemo } from 'react';

import { useConfig } from '../config/ConfigProvider';
import { getJSON } from '../http/getJSON';
import { postJSON } from '../http/postJSON';

import { createApi, IApi } from './createApi';

import { createLocalStorage } from '~/features/shared/features/localStorage/createLocalStorage';

const ApiContext = createContext<IApi>(undefined as unknown as IApi);

export const ApiProvider = (props: { children?: ReactNode }) => {
	const config = useConfig();
	const api = useMemo(
		() =>
			createApi({
				config,
				getJSON,
				postJSON,
				storage: createLocalStorage(),
			}),
		[config],
	);

	return (
		<ApiContext.Provider value={api}>{props.children}</ApiContext.Provider>
	);
};

export const useApi = () => useContext(ApiContext);
