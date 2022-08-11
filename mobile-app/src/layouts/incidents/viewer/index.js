import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TabBar, Tab } from '@ui-kitten/components';

import FilesScreen from './extra/files.component';
import GPSScreen from './extra/gps.component';
import InfoScreen from './extra/info.component';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='INFO' />
    <Tab title='FILES' />
    <Tab title='GPS' />
  </TabBar>
);

const TabNavigator = ({ incident }) => (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
    <Screen name='Info' component={InfoScreen} initialParams={{incident: incident}} />
    <Screen name='Files' component={FilesScreen} initialParams={{files: incident.files}} />
    <Screen name='GPS' component={GPSScreen} initialParams={{gps: incident.gps}} />
  </Navigator>
);

export default ({ incident }) => {
  return (
    <NavigationContainer independent={true}>
      <TabNavigator incident={incident} />
    </NavigationContainer>
  )
};