import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {requestProductAction} from '../../../../store/action/userAction';
import {HomeStyles} from '../HomeStyles';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../../store/store';

const GetStartedBlock = () => {
  const userName = useSelector((state: RootState) => state.LoginData.user);
  const apiOffset = useSelector((state: RootState) => state.userData.apiOffset);
  const dispatch = useDispatch();
  return (
    <View style={[HomeStyles.content, HomeStyles.center]}>
      <Text style={HomeStyles.welcomeText}>
        Welcome, {userName || 'Guest'}!
      </Text>
      <Text style={HomeStyles.contentText}>
        Explore our amazing app features!
      </Text>
      <TouchableOpacity
        style={HomeStyles.button}
        onPress={() => {
          dispatch(requestProductAction(apiOffset));
        }}>
        <Text style={HomeStyles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStartedBlock;
