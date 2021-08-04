import styled, { ThemeProps } from 'styled-components/native';
import { CustomThemeProps } from '../../contexts/theme';

export const Container = styled.View`
	margin: 0 20px;
	margin-top: 20px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const TitleText = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.white}
`