import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useDispatch, useSelector} from 'react-redux';
import {requestProductAction} from '../../../store/action/userAction';
import {RootState} from '../../../store/store';
import {HomeStyles} from '../HomeStyles';
import ItemComponent from './Item';
import LoadingIndictor from './LoadingIndictor';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native-gesture-handler';

const ItemList = () => {
  const userProducts = useSelector(
    (state: RootState) => state.userData.userProducts || [],
  );
  const apiOffset = useSelector((state: RootState) => state.userData.apiOffset);
  const isEmptyProducts = useSelector(
    (state: RootState) => state.userData.isEmptyProducts,
  );
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <FlatList
      // estimatedItemSize={100}
      // numColumns={2}
      ListFooterComponent={() => {
        console;
        return !isEmptyProducts && apiOffset > 0 && apiOffset < 100 ? (
          <LoadingIndictor />
        ) : (
          <Text style={HomeStyles.footerText}>
            There are No more Products!!
          </Text>
        );
      }}
      onEndReached={() => {
        if (!isEmptyProducts && apiOffset > 0 && apiOffset < 100)
          dispatch(requestProductAction(apiOffset));
      }}
      data={userProducts}
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={({item}) => <ItemComponent item={item}></ItemComponent>}
      contentContainerStyle={HomeStyles.listContainer}
    />
  );
};

export default ItemList;
