import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import {
  Button, Card, FAB, type MD3Theme,
} from 'react-native-paper';
import styled from 'styled-components';

import { View } from '../../shared/ui';

import { type IHomePageViewModel } from './HomePageViewModel';

type IHomePageProps = {
	viewModel: IHomePageViewModel;
};

export function HomePage({ viewModel: {} }: IHomePageProps) {
  return (
    <StyledContainer>
      <Card>
        <StatusBar style="auto" />
        <Button onPress={console.log}>test</Button>
        <Text>Open up App.tsx to start working on your app!</Text>
        <FAB
          variant="secondary"
          style={styles.fab}
          icon="plus"
          onPress={() => {
				  console.log('Pressed');
          }}
        />
      </Card>
    </StyledContainer>
  );
}

const StyledContainer = styled(View)<{ theme?: MD3Theme }>`
	background-color: ${({ theme }) => theme.colors.primary};
	//background-color: red;
	//flex: 1;
	//align-items: center;
	//justify-content: center;
	//display: flex;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
