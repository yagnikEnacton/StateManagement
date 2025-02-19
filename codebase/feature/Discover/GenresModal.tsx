import {FlatList, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {allGenres} from '../../utils/string';

const GenresModal = selectedGenres => {
  const keys = Object.keys(allGenres);
  return (
    <Modal>
      <View>
        <Text>Genres</Text>
        <View>
          <FlatList
            data={keys}
            renderItem={({item}) => {
              return <Text>{allGenres[item].name}</Text>;
            }}
            keyExtractor={item => keys[item].toString()}></FlatList>
        </View>
      </View>
    </Modal>
  );
};

export default GenresModal;

const styles = StyleSheet.create({});
