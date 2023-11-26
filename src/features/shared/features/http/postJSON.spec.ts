import { createMockHttpResponse } from './__mocks__/createMockHttpResponse';
import { postJSON } from './postJSON';

const fetch = jest.fn();
global.fetch = fetch;
fetch.mockResolvedValue(createMockHttpResponse());

describe('postJSON', () => {
	it('calls fetch with url, headers and body', () => {
		// Arrange
		const body = { key: 'val' };
		const url = 'a url';
		const headers = { Authorization: 'some' };

		// Act
		postJSON(url, body, headers);

		// Assert
		expect(fetch).toHaveBeenCalledWith(url, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				Accept: 'application/json',
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'Content-Type': 'application/json',
				...headers,
			},
		});
	});

	it('returns fetch result', async () => {
		// Arrange
		const value = { key: 'value' };
		fetch.mockResolvedValue(
			createMockHttpResponse({
				json: jest.fn().mockReturnValue(value),
			}),
		);

		// Act
		const result = await postJSON('', {});

		// Assert
		expect(result).toEqual(value);
	});

	it('returns response when status is 404 with content length of 100', async () => {
		// Arrange
		const value = { key: 'value' };
		const response = createMockHttpResponse({
			status: 404,
			headers: { get: jest.fn().mockReturnValue('100') },
			json: jest.fn().mockReturnValue(value),
		});
		fetch.mockResolvedValueOnce(response);

		// Act
		const result = postJSON('', {});

		// Assert
		await expect(result).resolves.toEqual(value);
	});
});
