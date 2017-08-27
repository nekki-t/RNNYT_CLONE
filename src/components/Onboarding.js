import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  View,
  LayoutAnimation,
  Animated,
  PanResponder
} from 'react-native';
import OnboardingButtons from './OnboardingButtons';
import OnboardingPanel from './OnboardingPanel';
import onboardingContent from '../config/onboarding';
import AppText from './AppText';
import CollapsibleView from './CollapsibleView';
import { ACCENT_COLORS } from '../styles/global';
import { DEVICE_WIDTH } from '../config/device';
import OnboardingProgress from './OnboardingProgress';

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.moveNext = this.moveNext.bind(this);
    this.movePrevious = this.movePrevious.bind(this);
    this.transitionToNextPanel = this.transitionToNextPanel.bind(this);
    this.moveFinal = this.moveFinal.bind(this);

    this.state = {
      currentIndex: 0,
      isDone: false,
      pan: new Animated.Value(0)
    };
  }

  componentWillMount() {
    this.dragPosition = 0;
    this.panListener = this.state.pan.addListener((value) => {
      this.dragPosition = value.value;
    });

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.pan.setOffset(this.dragPosition);
        this.state.pan.setValue(0);
      }
    });
  }

  moveNext() {
  }
  movePrevious() {
  }
  transitionToNextPanel() {
  }
  moveFinal() {
  }
  render() {
    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}


Onboarding.propTypes = {
  push: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  panelContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  doneContainer: {
    overflow: 'hidden',
    backgroundColor: ACCENT_COLORS[0],
    justifyContent: 'center',
    alignItems: 'center'
  },
  doneText: {
    fontSize: 20
  }
});

