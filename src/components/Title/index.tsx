import React from 'react';
import { ViewProps } from 'react-native';
import { 
	Container,
	TitleText
} from './styles';

interface TitleProps extends ViewProps {
	title: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return (
	  <Container>
		  <TitleText>{props.title}</TitleText>
		  {props.children}
	  </Container>
  );
}

export default Title;