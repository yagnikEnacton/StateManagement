import React from 'react';
import {
  Modal,
  FlatList,
  Switch,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {allGenres} from '../../utils/string'; // Assuming the object is in utils/string
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {RequestFilterMovies, SavedFilterGenres} from '../../utils/types';
import {requestFilteredMoviesAction} from '../../store/action/userAction';

const GenresModal = () => {
  const dispatch = useDispatch();
  const isFilterGenres = useSelector(
    (state: RootState) => state.MoviesData.isFilterGenres,
  );
  let filterGenres = useSelector(
    (state: RootState) => state.MoviesData.filterGenres,
  );

  const genreKeys = Object.keys(allGenres); // Get the genre IDs as keys

  // Handle the switch toggle to add or remove genres
  const handleToggleSwitch = (genreId: number) => {
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
  };

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
                />
              </View>
            );
          }}
          keyExtractor={item => allGenres[Number(item)].id.toString()}
        />

        <Button
          title="Close"
          onPress={() => {
            dispatch({
              type: RequestFilterMovies,
              payload: {isLoadingFilter: true, isFilterGenres: false},
            });
          }}
        />
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
    marginBottom: 10,
  },
  genreText: {
    fontSize: 16,
    color: '#333',
  },
});
