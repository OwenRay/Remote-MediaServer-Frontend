import React, { ReactNode } from 'react';

import { ConfigContext } from '../ConfigProvider';
import { IConfig } from '../types/IConfig';

import { createConfigMock } from '~/features/shared/features/config/types/__mocks__/createConfigMock';

export const MockedConfigProvider = (props: {
	children: ReactNode;
	value?: Partial<IConfig>;
}) => (
	<ConfigContext.Provider value={createConfigMock(props.value)}>
		{props.children}
	</ConfigContext.Provider>
);
