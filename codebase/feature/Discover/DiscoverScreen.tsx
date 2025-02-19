import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';

const DiscoverScreen = () => {
  let selectedGenres = [];
  return (
    <View>
      <View>
        <Text>Discover Your Comfort </Text>
      </View>
      <View>
        <Text>Included Genres</Text>
        <View>
          <FlatList></FlatList>
        </View>
        <Pressable>
          <Text>View All</Text>
        </Pressable>
      </View>
      <View>
        <Text>Recommended for you</Text>
        <View>
          <FlatList></FlatList>
        </View>
      </View>
    </View>
  );
};

export default DiscoverScreen;
