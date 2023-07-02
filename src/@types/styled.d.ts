import 'styled-components';
import 'styled-components/native';
import { type MD3Theme } from 'react-native-paper';

import { type theme } from '../features/shared/ui';

declare module 'styled-components' {
	export type DefaultTheme = MD3Theme;
}
declare module 'styled-components/native' {
	export type DefaultTheme = typeof theme;
}
