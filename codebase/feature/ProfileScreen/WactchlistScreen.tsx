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
import {requestWatchListMoviesAction} from '../../store/action/MoviesAction';

const WactchlistScreen = () => {
  const isLoadingWatchList = useSelector(
    (state: RootState) => state.MoviesData.isLoadingWatchList,
  );
  const watchListMovies = useSelector(
    (state: RootState) => state.MoviesData.watchListMovies,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestWatchListMoviesAction());
  }, []);
  return (
    <View>
      {isLoadingWatchList ? (
        <ActivityIndicator size="large" color="#F44336" />
      ) : watchListMovies.length > 0 ? (
        <FlatList
          numColumns={2}
          data={watchListMovies}
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

export default WactchlistScreen;

const styles = StyleSheet.create({
  contentTitle: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
