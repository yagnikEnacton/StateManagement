import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import ItemComponent from '../HomeScreen/components/Item';
import {requestFavoriteMoviesAction} from '../../store/action/MoviesAction';

const FavoriteScreen = () => {
  const isLoadingFavorite = useSelector(
    (state: RootState) => state.MoviesData.isLoadingFavorite,
  );
  const favoriteMovies = useSelector(
    (state: RootState) => state.MoviesData.favoriteMovies,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestFavoriteMoviesAction());
  }, []);

  return (
    <View>
      {isLoadingFavorite ? (
        <ActivityIndicator size="large" color="#F44336" />
      ) : favoriteMovies.length > 0 ? (
        <FlatList
          numColumns={2}
          data={favoriteMovies}
          renderItem={({item}: {item: any}) => (
            <ItemComponent item={item}></ItemComponent>
          )}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.contentTitle}>No Movies Found</Text>
      )}
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  contentTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
