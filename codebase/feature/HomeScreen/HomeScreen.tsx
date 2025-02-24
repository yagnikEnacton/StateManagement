import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {HomeStyles} from './HomeStyles';
import LoadingIndictor from './components/LoadingIndictor';
import ItemList from './components/ItemList';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchModal from './components/SearchModal';
import {StartSearch} from '../../utils/types';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {endSearchAction} from '../../store/action/MoviesAction';

const HomeScreen = () => {
  const isLoading = useSelector(
    (state: RootState) => state.MoviesData.isLoading,
  );
  const {t} = useTranslation();
  const dispatch = useDispatch();
  if (isLoading) {
    return <LoadingIndictor />;
  }
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <Text style={HomeStyles.headerTitle}>IMDB</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: StartSearch,
              payload: {isSearchModalVisible: true},
            });
          }}>
          <Icon name="search-outline" size={30} color={'black'} />
        </TouchableOpacity>
      </View>

      <ItemList />
      <SearchModal />
    </View>
  );
};

export default HomeScreen;
