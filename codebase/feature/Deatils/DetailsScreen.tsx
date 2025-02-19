import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DetailsStyles} from './DetailsStyle';
import {allGenres} from '../../utils/string';

// Get the device width

const DetailsScreen = ({route}: {route: any}) => {
  const item = route.params.item;
  const genreNames = item.genre_ids.map((id: number) => allGenres[id]);

  return (
    <ScrollView contentContainerStyle={DetailsStyles.container}>
      {/* Image Section */}
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          priority: FastImage.priority.high,
        }}
        style={DetailsStyles.posterImage}
        resizeMode={FastImage.resizeMode.cover}
      />

      {/* Title */}
      <Text style={DetailsStyles.title}>{item.name || item.title}</Text>

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
    </ScrollView>
  );
};

export default DetailsScreen;
