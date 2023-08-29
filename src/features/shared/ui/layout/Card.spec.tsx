import React from 'react';

import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Card } from './Card';

describe('Card', () => {
	it('renders the children', () => {
		// Arrange
		const text = 'some text';

		// Act
		const { getByText } = render(
			<Card>
				<Text>{text}</Text>
			</Card>,
		);

		// Assert
		expect(getByText(text)).toBeTruthy();
	});
});
