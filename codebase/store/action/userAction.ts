import {CurrentLanguage, RequestMovies} from '../../utils/types';

export const requestMoviesAction = () => {
  return {type: RequestMovies, payload: {}};
};

export const setLanguage = (currentLanguage: string) => {
  return {
    type: CurrentLanguage,
    payload: {currentLanguage: currentLanguage},
  };
};
