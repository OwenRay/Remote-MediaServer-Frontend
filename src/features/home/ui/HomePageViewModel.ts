import { TranslationFunction } from '~/features/shared/i18n/types/TranslationFunction';

export interface IHomePageViewModel {}

export interface IHomePageViewModelProps {
	t: TranslationFunction;
}

export const createHomePageViewModel = ({
	t,
}: IHomePageViewModelProps): IHomePageViewModel => ({});
