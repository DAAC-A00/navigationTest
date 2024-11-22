// src/App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>홈 화면</Text>
    </View>
  );
};

const ProfileScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>프로필 화면</Text>
    </View>
  );
};

const SettingScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>설정 화면</Text>
    </View>
  );
};

const DetailScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>상세 화면</Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
