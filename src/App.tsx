// src/App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 홈 스크린
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>홈 화면</Text>
    </View>
  );
};

// 홈 상세 스크린
const HomeDetailScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>홈 상세 화면</Text>
    </View>
  );
};

// 설정 스크린
const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>설정 화면</Text>
    </View>
  );
};

// 설정 상세 스크린
const SettingsInfoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>설정 정보 화면</Text>
    </View>
  );
};

// 홈 탭의 스택 네비게이션 설정
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
};

// 설정 탭의 스택 네비게이션 설정
const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="SettingsInfoScreen" component={SettingsInfoScreen} />
    </Stack.Navigator>
  );
};

// 최상위 App 컴포넌트
const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {/* 고정 제목 */}
        <View style={{ padding: 20, backgroundColor: '#f8f9fa', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>모바일앱</Text>
        </View>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string;

              if (route.name === '홈') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === '설정') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else {
                iconName = 'help-outline'; // 기본 아이콘 설정
              }

              // 아이콘 반환
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="홈" component={HomeStack} />
          <Tab.Screen name="설정" component={SettingsStack} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;
