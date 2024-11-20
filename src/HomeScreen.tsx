// src/HomeScreen.tsx

import React from 'react'; // React 라이브러리를 가져옵니다.
import { View, Text, Button } from 'react-native'; // React Native에서 사용할 UI 컴포넌트를 가져옵니다.
import { StackNavigationProp } from '@react-navigation/stack'; // 스택 내비게이션에서 사용할 타입을 가져옵니다.
import { RootStackParamList } from './App'; // 앱에서 정의한 매개변수 타입을 가져옵니다.

type HomeScreenProps = { // HomeScreen에서 사용할 props의 타입을 정의합니다.
  navigation: StackNavigationProp<RootStackParamList, 'Home'>; // 내비게이션 객체의 타입을 정의합니다.
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => { // HomeScreen 컴포넌트를 정의합니다. navigation 객체를 props로 받습니다.
  return ( // 컴포넌트가 반환할 JSX를 시작합니다.
    <View>
      <Text>홈 화면</Text>
      <Button title="상세 화면으로 이동" onPress={() => navigation.navigate('Details', { itemId: 42 })} />
    </View> // View 컴포넌트의 끝입니다.
  ); // JSX 반환의 끝입니다.
};

export default HomeScreen; // HomeScreen 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
