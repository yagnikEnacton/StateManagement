import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import updateNameCmp from './updateNameCmp';
import {useDispatch, useSelector} from 'react-redux';
import {
  modelVisibilityAction,
  updateNameAction,
} from '../../../store/action/userAction';
import {RootState} from '../../../store/store';
import React from 'react';
import UpdateNameCmp from './updateNameCmp';
// import { UpdateName } from '../../../store/types';

const ProfileScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.userData.isSignedIn,
  );
  const userName = useSelector((state: RootState) => state.userData.user);
  const dispatch = useDispatch();

  if (!isSignedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.bioText}>Please Sign In First</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: 'https://via.placeholder.com/150',
          }}
        />
      </View>

      {/* Name */}
       <Text style={styles.nameText}>{userName}</Text> 
       <UpdateNameCmp />
      {/* Update Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(modelVisibilityAction(true))}>
        <Text style={styles.buttonText}>Update Name</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  profilePictureContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#4CAF50',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0', // Placeholder background color
  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  bioText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: 160,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4CAF50',
    shadowOpacity: 0.4,
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
