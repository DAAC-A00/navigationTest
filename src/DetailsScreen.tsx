// src/DetailsScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; // RootStackParamList를 임포트

type DetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'Details'>; // 수정된 타입
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { itemId } = route.params;

  return (
    <View>
      <Text>아이템 ID: {itemId}</Text>
    </View>
  );
};

export default DetailsScreen;
