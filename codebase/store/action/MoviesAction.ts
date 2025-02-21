import {
  CurrentLanguage,
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

export const requestToggleWatchListAction = (
  MovieId: number,
  isWatchlist: boolean,
) => {
  return {
    type: RequestToggleWatchList,
    payload: {
      isLoadingWatchlist: true,
      isWatchlist: isWatchlist,
      MovieId: MovieId,
    },
  };
};
export const requestToggleFavoriteAction = (
  MovieId: number,
  isFavorite: boolean,
) => {
  return {
    type: RequestToggleFavorite,
    payload: {
      isLoadingFavorite: true,
      MovieId: MovieId,
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
