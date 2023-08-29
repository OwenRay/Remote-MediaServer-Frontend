import React, { ReactNode } from 'react';

import { ThemeProvider } from '../features/shared/ui';

export const AppContextMock = ({ children }: { children: ReactNode }) => (
	<ThemeProvider>{children}</ThemeProvider>
);
