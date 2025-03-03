import React, {useEffect} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {HomeStyles} from './HomeStyles';
import LoadingIndictor from './components/LoadingIndictor';
import ItemList from './components/ItemList';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchModal from './components/SearchModal';
import {startSearchAction} from '../../store/action/MoviesAction';
import {
  StackActions,
  TabActions,
  useNavigation,
} from '@react-navigation/native';

const HomeScreen = () => {
  const naivgation = useNavigation();
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      const myarr = url?.split('/');
      const path = myarr ? myarr[myarr.length - 1] : '';
      if (path == 'profile') {
        naivgation.dispatch(TabActions.jumpTo('Profile'));
      } else if (path == 'watchlist') {
        naivgation.dispatch(StackActions.push('WatchList'));
      } else {
        naivgation.dispatch(TabActions.jumpTo('Home'));
      }
    });
  });
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
            dispatch(startSearchAction());
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
