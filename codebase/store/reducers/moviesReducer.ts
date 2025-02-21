import {Alert} from 'react-native';
import {
  ModalVisibility,
  ReceiveFilterMovies,
  ReceiveMovies,
  UpdateName,
} from '../../utils/types';
const initialState = {
  Movies: [],
  FilterMovies: [],
  isModalVisible: false,
  isSearchModalVisible: false,
  isLoading: false,
  isLoadingFilter: false,
  isLoadingWatchlist: false,
  isLoadingFavorite: false,
  isEmptyMovies: false,
  currentLanguage: 'en',
  isFilterGenres: false,
  filterGenres: [],
  MovieId: -1,
  isFavorite: false,
  isWatchlist: false,
  searchQuery: '',
  searchedMovies: [],
  isSearchLoding: false,
  isSearched: false,
};
export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case ReceiveMovies:
      const Movies = [
        ...state.Movies, // Spread the existing movies
        ...payload.Movies.filter((movie: object) => movie !== null), // Remove null values from payload
      ];
      const uniqueMovies = Array.from(
        new Map(Movies.map(movie => [movie.id, movie])).values(),
      );
      console.log('uniqueMovies', uniqueMovies);
      return {
        ...state,
        Movies: uniqueMovies,
        isLoading: false,
        isEmptyMovies: false,
      };
    default:
      return {...state, ...payload};
  }
};
