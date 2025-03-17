import 'react-native';
import * as React from 'react';
import App from '../App';
import renderer, {act} from 'react-test-renderer';
import {log} from '@react-native-firebase/crashlytics';

test('App Render SnapShot testing', () => {
  let SnapShot;
  act(() => {
    SnapShot = renderer.create(<App />);
  });
  console.log(SnapShot);
  expect(SnapShot).toMatchSnapshot();
});
