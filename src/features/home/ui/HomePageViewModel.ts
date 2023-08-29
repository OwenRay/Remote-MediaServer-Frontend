import { TranslationFunction } from '../../shared/features/i18n/types/TranslationFunction';

export interface IHomePageViewModel {}

export interface IHomePageViewModelProps {
	t: TranslationFunction;
}

export const createHomePageViewModel = ({
	t,
}: IHomePageViewModelProps): IHomePageViewModel => ({
	test: t(''),
});
