// src/App.tsx

import React from 'react'; // React 라이브러리를 가져옵니다.
import { NavigationContainer } from '@react-navigation/native'; // 내비게이션을 위한 컨테이너를 가져옵니다.
import { createStackNavigator } from '@react-navigation/stack'; // 스택 내비게이션을 만들기 위한 함수를 가져옵니다.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // 탭 내비게이션을 만들기 위한 함수를 가져옵니다.
import HomeScreen from './HomeScreen'; // HomeScreen 컴포넌트를 가져옵니다.
import DetailsScreen from './DetailsScreen'; // DetailsScreen 컴포넌트를 가져옵니다.
import SettingsScreen from './SettingsScreen'; // 새로운 SettingsScreen 컴포넌트를 가져옵니다.
import Ionicons from 'react-native-vector-icons/Ionicons'; // 아이콘을 사용하기 위해 Ionicons를 가져옵니다.

export type RootStackParamList = { // 앱에서 사용할 화면과 매개변수를 정의하는 타입입니다.
  Home: undefined; // Home 화면은 매개변수를 받지 않습니다.
  Details: { itemId: number }; // Details 화면은 itemId라는 숫자형 매개변수를 받습니다.
  Tabs: undefined; // Tabs 화면은 매개변수를 받지 않습니다.
};

const Stack = createStackNavigator<RootStackParamList>(); // 정의한 타입을 사용하여 스택 내비게이터를 만듭니다.
const Tab = createBottomTabNavigator(); // 탭 내비게이터를 만듭니다.

function Tabs() { // 탭 내비게이션을 정의하는 함수입니다.
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({ // 각 탭에 대한 옵션을 설정합니다.
        tabBarIcon: ({ focused, color, size }) => { // 탭 아이콘을 설정하는 함수입니다.
          let iconName: string; // 아이콘 이름을 저장할 변수입니다.

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; // Home 탭의 아이콘을 설정합니다.
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'; // Settings 탭의 아이콘을 설정합니다.
          } else {
            iconName = 'help-outline'; // 기본 아이콘을 설정합니다.
          }

          return <Ionicons name={iconName} size={size} color={color} />; // 선택된 아이콘을 반환합니다.
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  ); // Tabs 함수의 끝입니다.
}

export default function App() { // App 컴포넌트를 정의합니다.
  return ( // 컴포넌트가 반환할 JSX를 시작합니다.
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer> // NavigationContainer의 끝입니다.
  ); // JSX 반환의 끝입니다.
}
