import React from 'react';
import {
	Wrapper,
	Container,
	MoviewImage,
	BottomGradient,
	MovieTitle,
	MovieSubTitle
} from './styles';

import The100Image from '../../assets/the_100.jpg';

const Movie: React.FC = () => {
	return (
		<Container
			activeOpacity={0.6}
			style={{
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.6,
				shadowRadius: 8,
				elevation: 8,
			}}
		>
			<Wrapper>
				<MoviewImage source={The100Image} />
				<BottomGradient colors={['transparent', '#000']} >
					<MovieTitle>The 100</MovieTitle>
					<MovieSubTitle>Episode 3
						<MovieSubTitle
							style={{
								fontWeight: 'bold',
								color: '#FFF',
							}}
						>{'  '}Earth Skills</MovieSubTitle>
					</MovieSubTitle>
				</BottomGradient>
			</Wrapper>
		</Container>
	);
}

export default Movie;