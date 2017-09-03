import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TabBarIOS,
  StatusBar
} from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import BookmarkContainer from '../containers/BookmarksContainer';
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
      <NewsFeedContainer />
    </TabBarIOS.Item>
    <TabBarIOS.Item
      systemIcon={'search'}
      selected={selectedTab === 'search'}
      onPress={() => tab('search')}
    >
      <SearchContainer />
    </TabBarIOS.Item>
    <TabBarIOS.Item
      systemIcon={'bookmarks'}
      selected={selectedTab === 'bookmarks'}
      onPress={() => tab('bookmarks')}
    >
      <BookmarkContainer />
    </TabBarIOS.Item>
  </TabBarIOS>
);

HomeScreen.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.func.isRequired
};

export default HomeScreen;
