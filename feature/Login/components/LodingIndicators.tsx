import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoadingIndicators = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#F44336" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default LoadingIndicators;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light background color for contrast
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    color: '#333', // Dark text color for better visibility
    marginTop: 20,
    fontWeight: '600',
  },
});
