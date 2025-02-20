import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DetailsStyles} from './DetailsStyle';
import {allGenres} from '../../utils/string';

// Get the device width

const DetailsScreen = ({route}: {route: any}) => {
  const item = route.params.item;
  const genreNames = item.genre_ids.map((id: number) => allGenres[id].name);

  return (
    <ScrollView contentContainerStyle={DetailsStyles.container}>
      {/* Title */}
      <Text style={DetailsStyles.title}>{item.name || item.title}</Text>
      {/* Image Section */}
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          priority: FastImage.priority.high,
        }}
        style={DetailsStyles.posterImage}
        resizeMode={FastImage.resizeMode.cover}
      />

      {/* Overview */}
      <Text style={DetailsStyles.overview}>{item.overview}</Text>

      {/* Additional Details */}
      <View style={DetailsStyles.detailsContainer}>
        <Text style={DetailsStyles.detailsTitle}>Original Language:</Text>
        <Text style={DetailsStyles.detailsText}>{item.original_language}</Text>

        <Text style={DetailsStyles.detailsTitle}>Adult Content:</Text>
        <Text style={DetailsStyles.detailsText}>
          {item.adult ? 'Yes' : 'No'}
        </Text>

        <Text style={DetailsStyles.detailsTitle}>Genres:</Text>
        <Text style={DetailsStyles.detailsText}>{genreNames.join(', ')}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Pressable style={styles.button} onPress={() => {}}>
          {/* <ActivityIndicator size="small" color="#F44336" /> */}
          {/* <Text style={styles.buttonText}>Add to Favorite</Text> */}
        </Pressable>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add to WatchList</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF6347', // Tomato color for button background
    paddingVertical: 12, // Vertical padding for the button
    paddingHorizontal: 20, // Horizontal padding for the button
    borderRadius: 25, // Rounded corners for the button
    width: 150, // Set a fixed width for the button
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Adds shadow on Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 0, height: 2}, // Shadow direction
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow blur radius for iOS
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16, // Set font size
    fontWeight: 'bold', // Bold text
  },
});
