import React,{memo} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const ItemComponent = ({item}: {item: any}) => {
  // Extract the first image from the `images` array
  const productImage = Array.isArray(item.images)
    ? item.images[0]
    : item.images;

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <FastImage
        source={{uri: productImage, priority: FastImage.priority.high}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      {/* <Image source={{uri: productImage}} style={styles.image} /> */}

      {/* Product Details */}
      <View style={styles.details}>
        {/* Title */}
        <Text style={styles.title}>{item.title}</Text>

        {/* Description */}
        <Text style={styles.description} ellipsizeMode="tail" numberOfLines={3}>
          {item.description}
        </Text>

        {/* Price */}
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        {/* Rating (if available) */}
        {item.rating && (
          <Text style={styles.rating}>
            ⭐ {item.rating.rate} ({item.rating.count} reviews)
          </Text>
        )}

        {/* Category Section */}
        {item.category && (
          <View style={styles.categoryContainer}>
            <Image
              source={{uri: item.category.image}}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>{item.category.name}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 15,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  rating: {
    fontSize: 12,
    color: '#888',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  categoryImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
  categoryText: {
    fontSize: 12,
    color: '#555',
  },
});
