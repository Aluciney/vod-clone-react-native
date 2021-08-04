import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
	Container,
	ContainerInput,
	SerachInput,
	SettingsButton
} from './styles';

const Search: React.FC = () => {
	return (
		<Container>
			<ContainerInput>
				<Ionicons name="search" size={22} color={'rgba(255,255,255,0.3)'}/>
				<SerachInput placeholder="Find your movie..."/>
			</ContainerInput>
			<SettingsButton>
				<Ionicons name="md-options" size={24} color={'rgba(255,255,255,0.6)'}/>
			</SettingsButton>
		</Container>
	);
}

export default Search;