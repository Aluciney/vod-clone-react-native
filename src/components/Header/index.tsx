import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
	Container,
	UserInfo,
	Avatar,
	DefaultText,
	NotificationButton
} from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<UserInfo>
				<Avatar source={{ uri: 'https://github.com/Aluciney.png' }} />
				<View>
					<DefaultText style={{ fontSize: 18 }}>Hey
						<DefaultText style={{ fontWeight: 'bold' }}> Hassan</DefaultText>
					</DefaultText>
					<DefaultText style={{ color: '#9595a1' }}>34 Days roaming</DefaultText>
				</View>
			</UserInfo>
			<NotificationButton activeOpacity={0.6}>
				<Ionicons name="ios-notifications-outline" size={24} color={'#9595a1'} />
			</NotificationButton>
		</Container>
	);
}

export default Header;