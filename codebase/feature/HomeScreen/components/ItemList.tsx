import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useDispatch, useSelector} from 'react-redux';
import {requestMoviesAction} from '../../../store/action/MoviesAction';
import {RootState} from '../../../store/store';
import {HomeStyles} from '../HomeStyles';
import ItemComponent from './Item';
import LoadingIndictor from './LoadingIndictor';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native-gesture-handler';

const ItemList = () => {
  const Movies = useSelector(
    (state: RootState) => state.MoviesData.Movies || [],
  );
  const isEmptyMovies = useSelector(
    (state: RootState) => state.MoviesData.isEmptyMovies,
  );
  const {t} = useTranslation();
  const dispatch = useDispatch();

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
        renderItem={({item}) => <ItemComponent item={item}></ItemComponent>}
        // contentContainerStyle={HomeStyles.listContainer}
      />
    </>
  );
};

export default ItemList;
