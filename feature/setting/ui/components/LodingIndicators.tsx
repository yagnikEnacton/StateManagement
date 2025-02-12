import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoadingIndicators = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#4CAF50" />
    </View>
  );
};

export default LoadingIndicators;
