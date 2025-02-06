import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {requestProductAction} from '../../../store/action/userAction';
import ItemComponent from './Item';
import {FlashList} from '@shopify/flash-list';

const HomeScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.userData.isSignedIn,
  );
  const userName = useSelector((state: RootState) => state.userData.user);
  const userProducts = useSelector(
    (state: RootState) => state.userData.userProducts || [],
  );
  const isLoading = useSelector((state: RootState) => state.userData.isLoading);
  const apiOffset = useSelector((state: RootState) => state.userData.apiOffset);
  const isEmptyProducts = useSelector(
    (state: RootState) => state.userData.isEmptyProducts,
  );
  const dispatch = useDispatch();

  const LoadingIndicator = () => (
    <View style={styles.loadingIndicatorContainer}>
      <ActivityIndicator size="large" color="#4CAF50" />
    </View>
  );

  if (!isSignedIn) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.contentText}>Please Sign In</Text>
      </View>
    );
  }

  if (isLoading && apiOffset == 0) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>

      {/* Main Content */}
      {userProducts.length === 0 ? (
        <View style={[styles.content, styles.center]}>
          <Text style={styles.welcomeText}>
            Welcome, {userName || 'Guest'}!
          </Text>
          <Text style={styles.contentText}>
            Explore our amazing app features!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(requestProductAction(apiOffset));
            }}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlashList
          // estimatedItemSize={100}
          ListFooterComponent={() => {
            console;
            return !isEmptyProducts && apiOffset > 0 && apiOffset < 100 ? (
              <LoadingIndicator />
            ) : (
              <Text style={styles.footerText}>
                There are No more Products!!
              </Text>
            );
          }}
          onEndReached={() => {
            if (!isEmptyProducts && apiOffset > 0 && apiOffset < 100)
              dispatch(requestProductAction(apiOffset));
          }}
          data={userProducts}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({item}) => <ItemComponent item={item}></ItemComponent>}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4', // Light background for a modern feel
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#4CAF50', // Green background for header
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    fontSize: 32, // Slightly larger font size for better hierarchy
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  welcomeText: {
    fontSize: 24, // Slightly larger welcome text
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  contentText: {
    fontSize: 18, // Increase text size for readability
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  footerText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  loadingIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
