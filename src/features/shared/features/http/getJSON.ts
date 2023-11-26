export type GetJSON = <K>(url: string, headers?: HeadersInit) => Promise<K>;

export const getJSON: GetJSON = <K>(
	url: string,
	headers?: HeadersInit,
): Promise<K> => {
	return fetch(url, {
		headers: { accept: 'application/json', ...headers },
	}).then((response) => {
		if (response.headers.get('content-length') === '0') {
			throw response;
		}
		return response.json() as Promise<K>;
	});
};
