import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {EndSearch} from '../../../utils/types';
import {requestSearchAction} from '../../../store/action/MoviesAction';
import SearchItemComponent from './SearchItem';

const SearchModal = () => {
  const dispatch = useDispatch();
  const isSearchModalVisible = useSelector(
    (state: RootState) => state.MoviesData.isSearchModalVisible,
  );
  const searchedMovies = useSelector(
    (state: RootState) => state.MoviesData.searchedMovies,
  );
  const isSearched = useSelector(
    (state: RootState) => state.MoviesData.isSearched,
  );
  const isSearchLoding = useSelector(
    (state: RootState) => state.MoviesData.isSearchLoding,
  );

  const [searchQuery, setSearchQuery] = useState('');

  // Debounce logic
  useEffect(() => {
    const timerOut = setTimeout(() => {
      if (searchQuery.trim()) {
        dispatch(requestSearchAction(searchQuery));
      }
    }, 1000); // Delay 1 second before dispatching the action

    return () => {
      clearTimeout(timerOut); // Clear the timeout on cleanup or when query changes
    };
  }, [searchQuery, dispatch]);

  const handleCloseModal = () => {
    setSearchQuery('');
    dispatch({
      type: EndSearch,
      payload: {
        isSearchModalVisible: false,
        searchedMovies: [],
        searchQuery: '',
        isSearched: false,
      },
    });
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isSearchModalVisible}>
      <View style={styles.modalContainer}>
        {/* Search Bar View */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => {
              dispatch(requestSearchAction(searchQuery));
            }}>
            <Icon name="search-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeIcon} onPress={handleCloseModal}>
            <Icon name="close-outline" size={15} color="white" />
          </TouchableOpacity>
        </View>

        {/* Data View */}
        <View style={styles.dataContainer}>
          {/* Close Icon Inside Content */}
          {isSearchLoding ? (
            <ActivityIndicator size="large" color="#4CAF50" />
          ) : isSearched && searchedMovies.length > 0 ? (
            <FlatList
              horizontal={true}
              data={searchedMovies}
              renderItem={({item}: {item: any}) => (
                <SearchItemComponent item={item}></SearchItemComponent>
              )}
              keyExtractor={item => item.id.toString()}
            />
          ) : (
            <Text style={styles.contentTitle}>No Movies Found</Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    width: '90%',
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    marginRight: 10,
  },
  searchIcon: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
  },
  closeIcon: {
    borderRadius: 50,
    backgroundColor: 'black',
    zIndex: 1,
    padding: 10,
    margin: 2,
  },
  dataContainer: {
    width: '90%',
    backgroundColor: '#e3e3e3',
    borderRadius: 8,
    padding: 20,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  contentTitle: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
});

export default SearchModal;
