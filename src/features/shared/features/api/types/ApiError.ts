export type ApiError = {
	error: {
		status: number;
		name: string;
		message: string;
	};
};

export const isApiError = (input?: unknown): input is ApiError => {
	return !!(input as ApiError | undefined)?.error;
};
