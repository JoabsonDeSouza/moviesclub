import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Category } from '../../models/categories';
import Categories from './Categories';

import {
  Container,
  Toolbar,
  Header,
  Text,
  ToolbarItems,
  ContainerLists,
  ContainerCategories,
  ContainerListMain,
} from './styles';

const mockCategories: Category[] = [
  {
    id: 0,
    name: 'ACAO',
    check: true,
  },
  {
    id: 1,
    name: 'FICÇAO',
    check: false,
  },
  {
    id: 2,
    name: 'TERROR',
    check: false,
  },
  {
    id: 3,
    name: 'DRAMA',
    check: false,
  },
];

const Home = () => {
  return (
    <Container>
      <Toolbar>
        <Icon name="menu" size={30} color="white" />

        <ToolbarItems>
          <Text bold size={18}>
            MOVIE CLUB
          </Text>
          <Icon name="movie-filter" size={20} color="white" />
        </ToolbarItems>
      </Toolbar>

      <FlatList
        data={null}
        keyExtractor={() => ''}
        renderItem={null}
        ListEmptyComponent={() => (
          <ContainerLists>
            <Header>
              <Text bold size={16}>
                NOW SHOWING
              </Text>
              <Text>VIEW ALL</Text>
            </Header>
            <ContainerCategories>
              <Categories list={mockCategories} />
            </ContainerCategories>
            <ContainerListMain />
          </ContainerLists>
        )}
      />
    </Container>
  );
};

export default Home;
