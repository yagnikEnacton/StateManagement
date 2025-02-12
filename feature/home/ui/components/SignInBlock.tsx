import {View, Text} from 'react-native';
import React from 'react';
import {HomeStyles} from '../HomeStyles';

const SignInBlock = () => {
  return (
    <View style={[HomeStyles.container, HomeStyles.center]}>
      <Text style={HomeStyles.contentText}>Please Sign In</Text>
    </View>
  );
};

export default SignInBlock;
