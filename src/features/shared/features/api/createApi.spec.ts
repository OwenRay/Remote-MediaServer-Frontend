import { createApi } from './createApi';

describe('createApi', () => {
	const create = ({
		apiEndpoint = '',
		postJSON = jest.fn().mockResolvedValue({}),
		getJSON = jest.fn().mockResolvedValue({}),
	} = {}) => {
		return createApi({ config: { apiEndpoint }, postJSON, getJSON });
	};

	it('getAll calls getJSON and returns the result when getAll is called', async () => {
		// Arrange
		const data = [{ key: 'value' }];
		const getJSON = jest.fn().mockResolvedValue({ data });
		const api = create({ getJSON });
		const type = 'someType';

		// Act
		const result = await api.getAll(type);

		// Assert
		expect(getJSON).toHaveBeenCalledWith(`/${type}`);
		expect(result).toEqual(data);
	});

	it('getAll calls getJSON and returns the result when getOne is called', async () => {
		// Arrange
		const id = 'some id';
		const data = { key: 'value' };
		const getJSON = jest.fn().mockResolvedValue(data);
		const api = create({ getJSON });
		const type = 'someType';

		// Act
		const result = await api.getOne(type, id);

		// Assert
		expect(getJSON).toHaveBeenCalledWith(`/${type}/${id}`);
		expect(result).toEqual(data);
	});

	it('get calls getJSON and returns the result when getOne is called', async () => {
		// Arrange
		const data = { key: 'value' };
		const getJSON = jest.fn().mockResolvedValue(data);
		const api = create({ getJSON });
		const url = 'someType';

		// Act
		const result = await api.get(url);

		// Assert
		expect(getJSON).toHaveBeenCalledWith(`/${url}`);
		expect(result).toEqual(data);
	});

	it('get calls postJSON and returns the result when post is called', async () => {
		// Arrange
		const data = { key: 'value' };
		const postJSON = jest.fn().mockResolvedValue(data);
		const api = create({ postJSON });
		const url = 'someType';
		const postData = { key: 'value' };

		// Act
		const result = await api.post(url, postData);

		// Assert
		expect(postJSON).toHaveBeenCalledWith(`/${url}`, postData, {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'Content-Type': 'application/json',
		});
		expect(result).toEqual(data);
	});
});
