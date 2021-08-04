import React from 'react';

import {
	Container,
	ButtonText
} from './styles';

interface ButtonProps {
	title: string;
	icon: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ title, icon, ...rest }) => {
	return (
		<Container {...rest} activeOpacity={0.6}>
			{icon}
			<ButtonText>{title}</ButtonText>
		</Container>
	);
}

export default Button;