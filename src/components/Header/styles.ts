import styled, { ThemeProps } from 'styled-components/native';
import { CustomThemeProps } from '../../contexts/theme';

export const Container = styled.View`
	margin: 0 20px;
	margin-top: 20px;
	height: 50px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const UserInfo = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const Avatar = styled.Image`
	height: 40px;
	width: 40px;
	border-radius: 20px;
	margin-right: 10px;
`;

export const DefaultText = styled.Text`
	color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.white};
	line-height: 20px;
`;

export const NotificationButton = styled.TouchableOpacity`
	height: 40px;
	width: 40px;
	border-radius: 10px;
	background-color: rgba(255,255,255,0.15);
	align-items: center;
	justify-content: center;
`;