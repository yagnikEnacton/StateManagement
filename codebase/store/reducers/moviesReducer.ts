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
  filterGenres: [],
  searchedMovies: [],
  favoriteMovies: [],
  watchListMovies: [],
  isModalVisible: false,
  isSearchModalVisible: false,
  isLoading: false,
  isLoadingCheckDetails: false,
  isLoadingFilter: false,
  isLoadingWatchList: false,
  isLoadingFavorite: false,
  isSearchLoading: false,
  isEmptyMovies: false,
  currentLanguage: 'en',
  isFilterGenres: false,
  movieId: -1,
  isFavorite: false,
  isWatchList: false,
  searchQuery: '',
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
