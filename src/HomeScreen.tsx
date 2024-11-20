// src/HomeScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // RootStackParamList를 임포트

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>; // 수정된 타입
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>홈 화면</Text>
      <Button title="상세 화면으로 이동" onPress={() => navigation.navigate('Details', { itemId: 42 })} />
    </View>
  );
};

export default HomeScreen;
