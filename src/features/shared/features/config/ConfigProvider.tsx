import React, { createContext, ReactNode, useContext, useState } from 'react';

import { Text } from 'react-native-paper';

import { useOnMount } from '../../ui/useOnMount';

import { IConfig } from './types/IConfig';

import { getConfig } from './index';

export const ConfigContext = createContext<IConfig>(
	undefined as unknown as IConfig,
);

export const ConfigProvider = (props: { children?: ReactNode }) => {
	const [config, setConfig] = useState<IConfig | undefined>(undefined);

	useOnMount(() => {
		getConfig().then((config) => setConfig(config));
	});

	if (!config) return <Text>Loading...</Text>;

	return (
		<ConfigContext.Provider value={config}>
			{props.children}
		</ConfigContext.Provider>
	);
};

export const useConfig = () => useContext(ConfigContext);
