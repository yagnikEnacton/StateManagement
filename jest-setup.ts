import '@testing-library/react-native/extend-expect';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
import 'react-native-gesture-handler/jestSetup';
jest.mock('react-native-reanimated', () => {
  const reanimated = require('react-native-reanimated/mock');
  reanimated.default.call = () => {};
  return reanimated;
});
// jest.mock();
