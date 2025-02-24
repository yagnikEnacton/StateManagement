import {
  CurrentLanguage,
  EndSearch,
  RequestCheckForWatchListAndFavorite,
  RequestFilterMovies,
  RequestMovies,
  RequestSearchMovies,
  RequestToggleFavorite,
  RequestToggleWatchList,
} from '../../utils/types';

export const requestMoviesAction = () => {
  return {type: RequestMovies, payload: {isLoading: true}};
};
export const requestFilteredMoviesAction = () => {
  return {
    type: RequestFilterMovies,
    payload: {isLoadingFilter: true, isFilterGenres: false},
  };
};

export const requestCheckForWatchListAndFavoriteAction = (movieId: number) => {
  return {
    type: RequestCheckForWatchListAndFavorite,
    payload: {movieId: movieId, isLoadingCheckDetails: true},
  };
};

export const endSearchAction = () => {
  return {
    type: EndSearch,
    payload: {
      isSearchModalVisible: false,
      searchedMovies: [],
      searchQuery: '',
      isSearched: false,
    },
  };
};

export const requestToggleWatchListAction = (
  movieId: number,
  isWatchList: boolean,
) => {
  return {
    type: RequestToggleWatchList,
    payload: {
      isLoadingWatchList: true,
      isWatchList: isWatchList,
      movieId: movieId,
    },
  };
};
export const requestToggleFavoriteAction = (
  movieId: number,
  isFavorite: boolean,
) => {
  return {
    type: RequestToggleFavorite,
    payload: {
      isLoadingFavorite: true,
      movieId: movieId,
      isFavorite: isFavorite,
    },
  };
};
export const setLanguage = (currentLanguage: string) => {
  return {
    type: CurrentLanguage,
    payload: {currentLanguage: currentLanguage},
  };
};

export const requestSearchAction = (searchQuery: string) => {
  return {
    type: RequestSearchMovies,
    payload: {
      searchQuery: searchQuery,
      isSearched: true,
    },
  };
};
