import {Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {HomeStyles} from '../HomeStyles';
import ItemComponent from './Item';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native-gesture-handler';

const ItemList = () => {
  const Movies = useSelector(
    (state: RootState) => state.MoviesData.Movies || [],
  );
  const {t} = useTranslation();

  return (
    <>
      <FlatList
        // estimatedItemSize={100}
        numColumns={2}
        ListHeaderComponent={() => {
          return (
            <Text style={[HomeStyles.headerTitle, {marginInlineStart: 20}]}>
              {t('Trendings')}
            </Text>
          );
        }}
        data={Movies}
        renderItem={({item}) => <ItemComponent item={item} />}
        // contentContainerStyle={HomeStyles.listContainer}
      />
    </>
  );
};

export default ItemList;
