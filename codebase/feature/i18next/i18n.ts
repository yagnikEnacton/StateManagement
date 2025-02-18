import i18n from 'i18next';

import {initReactI18next} from 'react-i18next';

import {getLocales} from 'react-native-localize';
import {store} from '../../store/store';
const langOptions = {
  en: {
    translation: {
      'Please Sign In First': 'Please Sign In First',
      'Sign out': 'Sign out',
      'Home Page': 'Home Page',
      'Sign Out': 'Sign Out',
      Home: 'Home',
      Settings: 'Setting',
      Profile: 'Profile',
      Welcome: 'Welcome',
      'Select Language': 'Select Language',
      'Get Started': 'Get Started',
      'Explore our amazing app features!': 'Explore our amazing app features!',
    },
  },
  guj: {
    translation: {
      'Please Sign In First': 'કૃપા કરીને પહેલે સાઇન ઇન કરો',
      'Sign Out': 'સાઇન આઉટ',
      'Home Page': 'હોમ પેજ',
      Home: 'હોમ',
      Settings: 'સેટિંગ',
      Profile: 'પ્રોફાઈલ',
      Welcome: 'સ્વાગત છે',
      'Select Language': 'ભાષા પસંદ કરો',
      'Get Started': 'શરૂઆત કરો',
      'Explore our amazing app features!':
        'અમારા શ્રેષ્ઠ એપ્લિકેશન ફીચર્સ શોધો!',
    },
  },
  hi: {
    translation: {
      'Please Sign In First': 'कृपया पहले साइन इन करें',
      'Sign Out': 'साइन आउट',
      'Home Page': 'मुख्य पृष्ठ',
      Home: 'होम',
      Settings: 'सेटिंग',
      Profile: 'प्रोफ़ाइल',
      Welcome: 'स्वागत है',
      'Select Language': 'भाषा चुनें',
      'Get Started': 'शुरू करें',
      'Explore our amazing app features!':
        'हमारी अद्भुत ऐप सुविधाओं का अन्वेषण करें!',
    },
  },
};

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: langOptions,
});

store.subscribe(() => {
  const language = store.getState().userData?.currentLanguage;
  if (i18n.language !== language) {
    i18n.changeLanguage(language); // Change i18n language when Redux state changes
  }
});

export default i18n;
