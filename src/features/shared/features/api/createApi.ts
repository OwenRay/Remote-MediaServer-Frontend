import { IConfig } from '../config/types/IConfig';
import { GetJSON } from '../http/getJSON';
import { PostJSON } from '../http/postJSON';

import { ApiError, isApiError } from './types';

export interface IApi {
	getAll<T>(type: string): Promise<T[] | ApiError>;
	getOne<T>(type: string, id: string): Promise<T | ApiError>;
	get<T>(url: string): Promise<T | ApiError>;
	post<T, DataType>(
		url: string,
		postData: DataType,
		returnBlob?: boolean,
	): Promise<T | ApiError>;
}

interface IApiProps {
	config: IConfig;
	getJSON: GetJSON;
	postJSON: PostJSON;
}

export const createApi = ({
	config: { apiEndpoint },
	getJSON,
	postJSON,
}: IApiProps): IApi => {
	const privateStore = {
		getAll<T>(type: string): Promise<T[] | ApiError> {
			return getJSON<{ data: T[] } | ApiError>(`${apiEndpoint}/${type}`).then(
				(result) =>
					isApiError(result) ? result : result.data.map((data) => data as T),
			);
		},
		getOne<T>(type: string, id: string): Promise<T> {
			return getJSON<T>(`${apiEndpoint}/${type}/${id}`);
		},
		get<T>(url: string): Promise<T> {
			return getJSON<T>(`${apiEndpoint}/${url}`);
		},
		post<T, DataType>(url: string, postData: DataType): Promise<T | ApiError> {
			return postJSON<T | ApiError, DataType>(
				`${apiEndpoint}/${url}`,
				postData,
				{
					// eslint-disable-next-line @typescript-eslint/naming-convention
					'Content-Type': 'application/json',
				},
			);
		},
	};
	return privateStore satisfies IApi;
};
