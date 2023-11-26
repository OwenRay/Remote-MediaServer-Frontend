import { createMockHttpResponse } from './__mocks__/createMockHttpResponse';
import { getJSON } from './getJSON';

const fetch = jest.fn();
global.fetch = fetch;
fetch.mockResolvedValue(createMockHttpResponse());

describe('getJSON', () => {
	it('returns json result from fetch', async () => {
		// Arrange
		const returnValue = 'returnValue';
		fetch.mockResolvedValueOnce(
			createMockHttpResponse({
				json: jest.fn().mockResolvedValue(returnValue),
			}),
		);

		// Act
		const result: string = await getJSON<string>('http://myurl.domain');

		// Assert
		expect(result).toEqual(returnValue);
	});

	it('adds request header: "accept: application/json"', async () => {
		// Act
		await getJSON<string>('');

		// Assert
		expect(fetch).toHaveBeenCalledWith(expect.anything(), {
			headers: { accept: 'application/json' },
		});
	});

	it('passes on request header', async () => {
		// Arrange
		const headers = {
			header1: 'a header value 1',
			header2: 'a header value 2',
			accept: 'overwrite accept',
		};

		// Act
		await getJSON<string>('', headers);

		// Assert
		expect(fetch).toHaveBeenCalledWith(expect.anything(), { headers });
	});

	it('passes on url', async () => {
		// Arrange
		const url = 'a url';

		// Act
		await getJSON<string>(url);

		// Assert
		expect(fetch).toHaveBeenCalledWith(url, expect.anything());
	});

	it('throws response as error when content-length is 0', async () => {
		// Arrange
		const response = createMockHttpResponse({
			status: 500,
			headers: { get: jest.fn().mockReturnValue('0') },
		});
		fetch.mockResolvedValueOnce(response);

		// Act
		const result = getJSON<string>('');

		// Assert
		await expect(result).rejects.toEqual(response);
	});
});
