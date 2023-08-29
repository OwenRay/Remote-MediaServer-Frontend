import { TranslationFunction } from '../TranslationFunction';

export const createTranslationFunctionMock =
	(): TranslationFunction => (text: string) =>
		text;
