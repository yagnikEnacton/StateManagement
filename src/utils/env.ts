import {getCrashlytics} from '@react-native-firebase/crashlytics';

export const apiEndpoint = 'https://api.themoviedb.org/3/';
export const trendingMovies = 'trending/movie/day';
export const genresMovies = 'genre/movie/list';
export const apiHeader = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODVmOTM0MGZjN2JkNTk2ZWRlYWE2ZWE0ZmM4MGRhYyIsIm5iZiI6MTczOTg2MzU5OS4zMjQsInN1YiI6IjY3YjQzNjJmZTVlMWE3ZWQ3Y2UxMjQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VFw39kP9TQwNhPk2D5YZD1AbE2o1XOpUeME5-Jj-Oe8',
};
export const crashlytics = getCrashlytics();
