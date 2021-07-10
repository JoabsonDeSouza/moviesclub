import React from 'react';
import { useState } from 'react';

import { FlatList } from 'react-native';
import { Category } from '../../../models/categories';

import { Text, ContainerItem } from './styles';

interface ICategories {
  list: Category[];
}

const Categories = ({ list }: ICategories) => {
  const [categories, setCategories] = useState(list);

  const handleClick = (category: Category) => {
    const listChecked = list.map(item => {
      const newItem = { ...item };
      newItem.check = false;

      if (item.id === category.id) {
        newItem.check = true;
      }

      return newItem;
    });

    setCategories(listChecked);
  };

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <ContainerItem
          background={item.check}
          onPress={() => handleClick(item)}>
          <Text size={20}>{item.name}</Text>
        </ContainerItem>
      )}
    />
  );
};

export default Categories;
