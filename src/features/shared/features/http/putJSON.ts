export type PutJSON = <Resp, Req>(
	url: string,
	body: Req,
	headers?: HeadersInit,
) => Promise<Resp>;

export const putJSON: PutJSON = <Resp, Req>(
	url: string,
	body: Req,
	headers?: HeadersInit,
): Promise<Resp> => {
	return fetch(url, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'Content-Type': 'application/json',
			...headers,
		},
		body: JSON.stringify(body),
	}).then((response) => {
		return response.json() as Promise<Resp>;
	});
};
