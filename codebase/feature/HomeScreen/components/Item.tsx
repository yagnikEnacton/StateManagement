import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('window');

const ItemComponent = ({item}: {item: any}) => {
  const backDrop = item.poster_path;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${backDrop}`,
            priority: FastImage.priority.high,
          }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{item.title || item.name}</Text>

        <Text style={styles.description} ellipsizeMode="tail" numberOfLines={2}>
          {item.overview}
        </Text>

        <Text style={styles.releaseDate}>Release: {item.release_date}</Text>

        <Text style={styles.rating}>
          ⭐ {item.vote_average} ({item.vote_count} votes)
        </Text>
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    width: width / 2 - 20,
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  details: {
    width: '100%',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  releaseDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  rating: {
    fontSize: 13,
    color: '#888',
  },
});
