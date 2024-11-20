// src/DetailsScreen.tsx

import React from 'react'; // React 라이브러리를 가져옵니다.
import { View, Text } from 'react-native'; // React Native에서 사용할 UI 컴포넌트를 가져옵니다.
import { RouteProp } from '@react-navigation/native'; // 내비게이션에서 route 객체의 타입을 가져옵니다.
import { StackNavigationProp } from '@react-navigation/stack'; // 스택 내비게이션에서 사용할 타입을 가져옵니다.
import { RootStackParamList } from './App'; // 앱에서 정의한 매개변수 타입을 가져옵니다.

type DetailsScreenProps = { // DetailsScreen에서 사용할 props의 타입을 정의합니다.
  route: RouteProp<RootStackParamList, 'Details'>; // route 객체의 타입을 정의합니다. Details 화면에 필요한 매개변수를 포함합니다.
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => { // DetailsScreen 컴포넌트를 정의합니다. route 객체를 props로 받습니다.
  const { itemId } = route.params; // route에서 itemId 매개변수를 추출합니다.

  return ( // 컴포넌트가 반환할 JSX를 시작합니다.
    <View>
      <Text>아이템 ID: {itemId}</Text>
    </View> // View 컴포넌트의 끝입니다.
  ); // JSX 반환의 끝입니다.
};

export default DetailsScreen; // DetailsScreen 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
