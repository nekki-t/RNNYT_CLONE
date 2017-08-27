import { NavigationExperimental } from 'react-native';

import {
  NAVIGATION_PUSH,
  NAVIGATION_POP,
  NAVIGATION_TAB,
  NAVIGATION_OPEN_MODAL,
  NAVIGATION_CLOSE_MODAL,
} from '../actions/actionTypes';
import IntroScreen from '../components/IntroScreen';
import Onboarding from '../components/Onboarding';

const { StateUtils } = NavigationExperimental;


const routes = {
  intro: {
    key: 'intro',
    component: IntroScreen
  },
  onboarding: {
    key: 'onboarding',
    component: Onboarding
  }
};

const initialState = {
  index: 0,
  routes: [
    routes.intro
  ]
};

export default (state = initialState, action = {}) => {
  if (action.type === NAVIGATION_PUSH) {
    return StateUtils.push(state, routes[action.payload]);
  }
  return state;
};
