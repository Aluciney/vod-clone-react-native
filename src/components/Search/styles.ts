import styled from 'styled-components/native';

export const Container = styled.View`
	margin: 0 20px;
	margin-top: 20px;
	height: 45px;
	padding: 0 15px;
	border-radius: 7px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: rgba(255,255,255,0.15);
`;

export const ContainerInput = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const SerachInput = styled.TextInput.attrs({
	placeholderTextColor: 'rgba(255,255,255,0.3)'
})`
	height: 100%;
	margin-left: 8px;
	font-size: 20px;
`;

export const SettingsButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
`;