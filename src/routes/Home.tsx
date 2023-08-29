import React from 'react';

import { HomePage } from '../features/home/ui/HomePage';
import { createHomePageViewModel } from '../features/home/ui/HomePageViewModel';
import { useTranslationFunction } from '../features/shared/features/i18n/useTranslationFunction';
import { IRoute } from '../features/shared/ui/navigation/types/IRoute';

const Home = () => {
	const t = useTranslationFunction();
	return <HomePage viewModel={createHomePageViewModel({ t })} />;
};

export const HomeRoute: IRoute = {
	path: '/',
	Component: Home,
	name: 'Home',
	icon: 'home',
};
