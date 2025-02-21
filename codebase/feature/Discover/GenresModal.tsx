import React, {useCallback} from 'react';
import {
  Modal,
  FlatList,
  Switch,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {allGenres} from '../../utils/string';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {SavedFilterGenres} from '../../utils/types';
import {requestFilteredMoviesAction} from '../../store/action/MoviesAction';

const GenresModal = () => {
  const dispatch = useDispatch();
  const isFilterGenres = useSelector(
    (state: RootState) => state.MoviesData.isFilterGenres,
  );
  const filterGenres = useSelector(
    (state: RootState) => state.MoviesData.filterGenres,
  );

  const genreKeys = Object.keys(allGenres); // Get the genre IDs as keys

  // Handle the switch toggle to add or remove genres
  const handleToggleSwitch = useCallback(
    (genreId: number) => {
      const isSelected = filterGenres.includes(genreId);

      if (isSelected) {
        // Remove the genre from selected genres
        dispatch({
          type: SavedFilterGenres,
          payload: {
            filterGenres: filterGenres.filter(id => id !== genreId),
          },
        });
      } else {
        // Add the genre to selected genres
        dispatch({
          type: SavedFilterGenres,
          payload: {
            filterGenres: [...filterGenres, genreId],
          },
        });
      }
    },
    [dispatch, filterGenres],
  );

  return (
    <Modal animationType="slide" visible={isFilterGenres}>
      <View style={styles.modalContainer}>
        <Text style={styles.header}>Select Genres</Text>

        <FlatList
          data={genreKeys}
          renderItem={({item}) => {
            const genre = allGenres[Number(item)]; // Get genre data using the genre ID (item)
            const isSelected = filterGenres.includes(genre.id); // Check if genre is selected

            return (
              <View style={styles.genreItem}>
                <Text style={styles.genreText}>{genre.name}</Text>
                <Switch
                  value={isSelected} // Set switch to on/off based on genre's selection status
                  onValueChange={() => handleToggleSwitch(genre.id)} // Toggle genre on/off
                  thumbColor={isSelected ? '#F44336' : '#ccc'}
                  trackColor={{false: '#ccc', true: '#F44336'}}
                />
              </View>
            );
          }}
          keyExtractor={item => allGenres[Number(item)].id.toString()}
        />

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            dispatch(requestFilteredMoviesAction());
          }}>
          <Text style={styles.closeButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default GenresModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  genreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  genreText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  closeButton: {
    backgroundColor: '#F44336',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
