module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			require.resolve('expo-router/babel'),
			'styled-components',
			['react-native-reanimated/plugin'],
			['@babel/plugin-proposal-export-namespace-from'],
		],
	};
};
