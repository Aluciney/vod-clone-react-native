import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: ${width - 90}px;
	padding: 15px 0;
`;

export const Wrapper = styled.View`
	position: relative;
	width: ${width - 120}px;
	height: ${width}px;
`;

export const MoviewImage = styled.Image`
	position: absolute;
	width: ${width - 120}px;
	height: ${width}px;
	border-radius: 30px;
	background-color: #000;
`;

export const BottomGradient = styled(LinearGradient)`
	position: absolute;
	width: 100%;
	height: 120px;
	border-radius: 30px;
	bottom: 0;
	padding: 25px 30px;
	justify-content: flex-end;
`;

export const MovieTitle = styled.Text`
	font-size: 28px;
	color: #FFF;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const MovieSubTitle = styled.Text`
	font-size: 18px;
	color: rgba(255,255,255,0.7);
`;

