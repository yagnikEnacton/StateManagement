import {ModalVisibility, ReceiveMovies, UpdateName} from '../../utils/types';
const initialState = {
  Movies: [],
  isModalVisible: false,
  isLoading: false,
  isEmptyMovies: false,
  currentLanguage: 'en',
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

      // Now ensure uniqueness by using the `id` property (or any unique property)
      const uniqueMovies = Array.from(
        new Map(Movies.map(movie => [movie.id, movie])).values(),
      );
      console.log('uniqueMovies', uniqueMovies);
      return {
        ...state,
        Movies: uniqueMovies,
        isLoading: false,
      };
    default:
      return {...state, ...payload};
  }
};
