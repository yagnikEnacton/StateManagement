import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import ItemComponent from '../HomeScreen/components/Item';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import GenresModal from './GenresModal';
import {allGenres} from '../../utils/string';
import {StartFilterGenres} from '../../utils/types';
import {
  requestFilteredMoviesAction,
  startFilterGenresAction,
} from '../../store/action/MoviesAction';

const DiscoverScreen = () => {
  const FilterMovies = useSelector(
    (state: RootState) => state.MoviesData.FilterMovies || [],
  );
  const dispatch = useDispatch();
  const filterGenres = useSelector(
    (state: RootState) => state.MoviesData.filterGenres,
  );
  const isLoading = useSelector(
    (state: RootState) => state.MoviesData.isLoading,
  );

  useEffect(() => {
    dispatch(requestFilteredMoviesAction());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Discover Your Comfort!!</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Included Genres :</Text>
        <View style={styles.generesContainer}>
          {filterGenres.length > 0 ? (
            <FlatList
              horizontal={true}
              data={filterGenres}
              renderItem={({item}) => (
                <Text style={styles.genresText}>
                  {allGenres[Number(item)].name}
                </Text>
              )} // Adjust as per your actual data
              keyExtractor={(item: any) => item.toString()}
            />
          ) : (
            <Text style={styles.genresText}>No Genres Selected</Text>
          )}
        </View>

        <Pressable
          onPress={() => {
            dispatch(startFilterGenresAction());
          }}>
          <Text style={styles.Filter}>Filter</Text>
        </Pressable>
      </View>

      <View style={styles.contentContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#4CAF50" />
        ) : FilterMovies.length > 0 ? (
          <FlatList
            numColumns={2}
            ListHeaderComponent={
              <Text style={styles.contentTitle}>Recommended for you</Text>
            }
            data={FilterMovies}
            renderItem={({item}) => <ItemComponent item={item}></ItemComponent>}
            keyExtractor={(item: any) => item.id.toString()}
          />
        ) : (
          <Text style={styles.contentTitle}>No Movies Found</Text>
        )}
      </View>
      <GenresModal />
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  contentTitle: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  Filter: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  filterContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  filterText: {
    fontSize: 14,
    padding: 2,
    marginHorizontal: 2,
    fontWeight: 'bold',
    color: '#333',
  },
  genresText: {
    fontSize: 14,
    color: '#333',
    padding: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  generesContainer: {
    width: '50%',
  },
  contentContainer: {
    // flex: 0.6,
    backgroundColor: '#F4F4F4',
  },
});
