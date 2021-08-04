import React, { createContext, useCallback, useContext, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Theme from '../theme';

interface ThemeContextData {
	toggleTheme(): void;
	theme: CustomThemeProps;
}

export interface CustomThemeProps {
	name: string;
	colors: {
		primary: string;
		black: string;
		white: string;
		background: string;
		border: string;
	}
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const CustomThemeProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState<CustomThemeProps>(Theme['dark']);
	const toggleTheme = useCallback(() => {
		if (theme.name === 'dark') {
			setTheme(Theme['light']);
		}
		else if (theme.name === 'light') {
			setTheme(Theme['dark']);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			<ThemeProvider theme={theme}>
				<StatusBar 
					barStyle={theme.name == 'light' ? 'dark-content' : 'light-content'}
					translucent
					backgroundColor="transparent"
				/>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext);