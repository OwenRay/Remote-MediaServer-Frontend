module.exports = (api) => {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'styled-components',
			['react-native-reanimated/plugin'],
			['@babel/plugin-proposal-export-namespace-from'],
		],
	};
};
