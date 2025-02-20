import {
  CurrentLanguage,
  RequestFilterMovies,
  RequestMovies,
} from '../../utils/types';

export const requestMoviesAction = () => {
  return {type: RequestMovies, payload: {isLoading: true}};
};
export const requestFilteredMoviesAction = () => {
  return {};
};

export const setLanguage = (currentLanguage: string) => {
  return {
    type: CurrentLanguage,
    payload: {currentLanguage: currentLanguage},
  };
};
