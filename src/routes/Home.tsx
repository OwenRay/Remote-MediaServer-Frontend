import React from 'react';

import { HomePage } from '../features/home/ui/HomePage';
import { createHomePageViewModel } from '../features/home/ui/HomePageViewModel';
import { useTranslationFunction } from '../features/shared/features/i18n/useTranslationFunction';

export const Home = () => {
	const t = useTranslationFunction();
	return <HomePage viewModel={createHomePageViewModel({ t })} />;
};
