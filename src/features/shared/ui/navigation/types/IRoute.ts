import { FunctionComponent } from 'react';

export type IRoute = {
	path: string;
	name: string;
	Component: FunctionComponent;
	icon: string;
};
