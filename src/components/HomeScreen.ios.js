import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TabBarIOS,
  StatusBar
} from 'react-native';

import * as globalStyles from '../styles/global';

StatusBar.setBarStyle('light-content');


const HomeScreen = ({ selectedTab, tab }) => (
  <TabBarIOS
    barTintColor={globalStyles.BAR_COLOR}
    tintColor={globalStyles.LINK_COLOR}
    translucent={false}
  >
    <TabBarIOS.Item
      systemIcon={'featured'}
      selected={selectedTab === 'newsFeed'}
      onPress={() => tab('newsFeed')}
    >
      <View>
        <Text>
          newsFeed
        </Text>
      </View>
    </TabBarIOS.Item>
    <TabBarIOS.Item
      systemIcon={'search'}
      selected={selectedTab === 'search'}
      onPress={() => tab('search')}
    >
      <View>
        <Text>
          search
        </Text>
      </View>
    </TabBarIOS.Item>
    <TabBarIOS.Item
      systemIcon={'bookmarks'}
      selected={selectedTab === 'bookmarks'}
      onPress={() => tab('bookmarks')}
    >
      <View>
        <Text>
          bookmarks
        </Text>
      </View>
    </TabBarIOS.Item>
  </TabBarIOS>
);

HomeScreen.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.func.isRequired
};

export default HomeScreen;
