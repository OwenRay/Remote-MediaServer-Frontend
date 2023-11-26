import { createGetConfig } from './createGetConfig';
import { createConfigMock } from './types/__mocks__/createConfigMock';
import { IConfig } from './types/IConfig';

describe('getPublicConfig', () => {
	it('uses loaded config variables in result', async () => {
		// Arrange
		const translationsLoadPath = 'a loadPath';
		const defaultLocale = 'default locale';
		const translationNamespace = 'a namespace';
		const version = '2022.02.03.02';
		const translationDomainFallback = 'some extension';
		const azureAdTenantId = 'a tenant id';
		const azureAdClientId = 'a client id';
		const apiEndpoint = 'an api endpoint';
		const fetcher = jest.fn().mockResolvedValue({
			translationsLoadPath,
			defaultLocale,
			translationNamespace,
			version,
			translationDomainFallback,
			azureAdTenantId,
			apiEndpoint,
			azureAdClientId,
		} as IConfig);
		const getConfig = createGetConfig(fetcher);

		// Act
		const result = await getConfig();

		// Assert
		expect(result).toEqual(
			expect.objectContaining({
				translationsLoadPath,
				defaultLocale,
				translationNamespace,
				version,
				translationDomainFallback,
				azureAdTenantId,
				apiEndpoint,
				azureAdClientId,
			}),
		);
	});

	it('fails config validation', async () => {
		// Arrange
		const fetcher = jest.fn().mockResolvedValue(
			createConfigMock({
				apiEndpoint: null as unknown as string,
			}),
		);

		// Act
		const getConfig = createGetConfig(fetcher);

		// Assert
		await expect(getConfig).rejects.toThrowError(
			'apiEndpoint must be a `string` type, but the final value was: `null`.\n' +
				' If "null" is intended as an empty value be sure to mark the schema as `.nullable()`',
		);
	});

	it('only calls fetchJSON once', async () => {
		// Arrange
		const fetcher = jest.fn().mockResolvedValue(createConfigMock({}));

		// Act
		const getConfig = createGetConfig(fetcher);
		await getConfig();
		await getConfig();

		// Assert
		expect(fetcher).toHaveBeenCalledTimes(1);
	});
});
