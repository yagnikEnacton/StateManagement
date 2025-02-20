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
  isLoading: false,
  isLoadingFilter: false,
  isEmptyMovies: false,
  currentLanguage: 'en',
  isFilterGenres: false,
  filterGenres: [],
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
    // case ReceiveFilterMovies:
    //   const filterMovies = [
    //     ...state.FilterMovies, // Spread the existing movies
    //     ...payload.FilterMovies.filter((movie: object) => movie !== null), // Remove null values from payload
    //   ];
    //   const filterUniqueMovies = Array.from(
    //     new Map(filterMovies.map(movie => [movie.id, movie])).values(),
    //   );
    //   console.log('filterUniqueMovies', filterUniqueMovies);
    //   return {
    //     ...state,
    //     FilterMovies: filterUniqueMovies,
    //     isLoadingFilter: false,
    //     isEmptyMovies: false,
    //   };
    default:
      return {...state, ...payload};
  }
};
