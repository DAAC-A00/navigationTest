// src/App.tsx

import 'react-native-gesture-handler'; // react-native-gesture-handler 라이브러리를 임포트하여 제스처 핸들링 기능을 사용 가능하게 함
import * as React from 'react'; // React 라이브러리를 임포트
import { NavigationContainer } from '@react-navigation/native'; // 네비게이션 컨테이너를 임포트하여 앱의 네비게이션 구조를 정의
import { createDrawerNavigator } from '@react-navigation/drawer'; // Drawer 네비게이터를 임포트
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Tab 네비게이터를 임포트
import { View, Text } from 'react-native'; // React Native의 기본 컴포넌트인 View, Text를 임포트

const Drawer = createDrawerNavigator(); // Drawer 네비게이터 생성
const Tab = createBottomTabNavigator(); // Tab 네비게이터 생성

// 홈 화면 컴포넌트 정의
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>홈 화면</Text>
    </View>
  );
}

// 설정 화면 컴포넌트 정의
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>설정 화면</Text>
    </View>
  );
}

// 프로필 화면 컴포넌트 정의
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>프로필 화면</Text>
    </View>
  );
}

// 정보 화면 컴포넌트 정의
function InfoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>정보 화면</Text>
    </View>
  );
}

// 탭 네비게이터 정의
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="설정" component={SettingsScreen} />
      <Tab.Screen name="프로필" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// 앱 컴포넌트 정의
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="탭">
        <Drawer.Screen name="탭" component={TabNavigator} />
        <Drawer.Screen name="정보" component={InfoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
