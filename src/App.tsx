// src/App.tsx

import React from 'react'; // React 라이브러리를 가져옵니다.
import { NavigationContainer } from '@react-navigation/native'; // 내비게이션을 위한 컨테이너를 가져옵니다.
import { createStackNavigator } from '@react-navigation/stack'; // 스택 내비게이션을 만들기 위한 함수를 가져옵니다.
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

export type RootStackParamList = { // 앱에서 사용할 화면과 매개변수를 정의하는 타입입니다.
  Home: undefined; // Home 화면은 매개변수를 받지 않습니다.
  Details: undefined; // Details 화면은 매개변수를 받지 않습니다. Jotai로 상태를 관리합니다.
};

const Stack = createStackNavigator<RootStackParamList>(); // 정의한 타입을 사용하여 스택 내비게이터를 만듭니다.

export default function App() { // App 컴포넌트를 정의합니다.
  return ( // 컴포넌트가 반환할 JSX를 시작합니다.
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer> // NavigationContainer의 끝입니다.
  ); // JSX 반환의 끝입니다.
}
