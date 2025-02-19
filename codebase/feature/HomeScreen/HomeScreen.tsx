import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {HomeStyles} from './HomeStyles';
import LoadingIndictor from './components/LoadingIndictor';
import ItemList from './components/ItemList';
import i18n from '../i18next/i18n';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import {requestMoviesAction} from '../../store/action/userAction';
const initI18n = i18n;

const HomeScreen = () => {
  const Movies = useSelector(
    (state: RootState) => state.MoviesData.Movies || [],
  );
  const isLoading = useSelector(
    (state: RootState) => state.MoviesData.isLoading,
  );
  const {t} = useTranslation();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(requestMoviesAction());
  // }, []);
  if (isLoading) {
    return <LoadingIndictor />;
  }
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <Text style={HomeStyles.headerTitle}>IMDB</Text>
        <TouchableOpacity>
          <Icon name="search-outline" size={30} color={'black'} />
        </TouchableOpacity>
      </View>

      <ItemList />
      {/* {userProducts.length === 0 ?  : <></>} */}
    </View>
  );
};

export default HomeScreen;
