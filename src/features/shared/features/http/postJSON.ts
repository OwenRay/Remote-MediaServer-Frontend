export type PostJSON = <Resp, Req>(
	url: string,
	body: Req,
	headers?: HeadersInit,
	returnBlob?: boolean,
) => Promise<Resp>;

export const postJSON: PostJSON = <Resp, Req>(
	url: string,
	body: Req,
	headers?: HeadersInit,
): Promise<Resp> => {
	return fetch(url, {
		method: 'POST',
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
