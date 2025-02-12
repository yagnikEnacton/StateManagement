import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {HomeStyles} from '../HomeStyles';

const LoadingIndictor = () => {
  return (
    <View style={HomeStyles.loadingIndicatorContainer}>
      <ActivityIndicator size="large" color="#4CAF50" />
    </View>
  );
};

export default LoadingIndictor;
