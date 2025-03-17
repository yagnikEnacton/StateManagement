// types.ts (or navigation/types.ts)
export type ProfileStackParamList = {
  HomeTab: undefined; // No parameters for HomeTab
  Setting: undefined; // No parameters for Setting
  Details: {item: any}; // Pass `movieId` as a parameter to the Details screen
  Watchlist: undefined; // No parameters for Watchlist
  Favorites: undefined; // No parameters for Favorites
};
// types.ts or navigation/types.ts (where you store your types)
export type HomeTabParamList = {
  Home: undefined; // No parameters for Home
  Discover: undefined; // No parameters for Discover
  Profile: undefined; // No parameters for Profile
};
