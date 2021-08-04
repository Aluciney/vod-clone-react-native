import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { 
	Container,
	SelectAllText
} from './styles';

const SelectAll: React.FC = () => {
  return (
	  <Container activeOpacity={0.6}>
		  <SelectAllText>Select all</SelectAllText>
		  <FontAwesome name="angle-right" size={20} color="rgba(255,255,255,0.3)" />
	  </Container>
  );
}

export default SelectAll;