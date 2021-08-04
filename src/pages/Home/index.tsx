import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import Genres from '../../components/Genres';
import Header from '../../components/Header';
import Search from '../../components/Search';
import SelectAll from '../../components/SelectAll';
import Title from '../../components/Title';
import TopMovies from '../../components/TopMovies';

import { 
  Wrapper,
  Container 
} from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
}

const Home: React.FC = () => {
  const HomePage = useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Header />
      },
      {
        key: 'SERACH',
        render: () => <Search />,
      },
      {
        key: 'TITLE_GENRES',
        render: () => <Title title="Genres" />,
      },
      {
        key: 'GENRES_LIST',
        render: () => <Genres />,
      },
      {
        key: 'TOP_MOVIES',
        render: () => <Title title="Top Movies" ><SelectAll /></Title>,
      },
      {
        key: 'MOVIES',
        render: () => <TopMovies />,
      },
    ];
    return items;
  }, []);

  return (
    <Wrapper>
      <Container>
        <FlatList<Item>
          data={HomePage}
          renderItem={({ item }) => item.render()}
          keyExtractor={(item) => item.key}
        />
      </Container>
    </Wrapper>
  );
}

export default Home;