import React from 'react';
import { Dimensions } from 'react-native';
import Movie from '../Movie';

import { Container } from './styles';

const TopMovies: React.FC = () => {
	const { width } = Dimensions.get('window');

	return (
		<Container
			horizontal
			showsHorizontalScrollIndicator={false}
			pagingEnabled
			decelerationRate={0}
			snapToInterval={width - 90}
			snapToAlignment={"center"}
			contentOffset={{ y: 0, x: 270 }}
		>
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
		</Container>
	);
}

export default TopMovies;