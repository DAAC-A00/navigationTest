// src/DetailsScreen.tsx

import React from 'react'; // React 라이브러리를 가져옵니다.
import { View, Text } from 'react-native'; // React Native에서 사용할 UI 컴포넌트를 가져옵니다.
import { useAtom } from 'jotai'; // Jotai의 useAtom을 가져옵니다.
import { itemIdAtom } from './HomeScreen'; // HomeScreen에서 정의한 atom을 가져옵니다.

const DetailsScreen: React.FC = () => { // DetailsScreen 컴포넌트를 정의합니다.
  const [itemId] = useAtom(itemIdAtom); // atom에서 itemId를 가져옵니다.

  return ( // 컴포넌트가 반환할 JSX를 시작합니다.
    <View>
      <Text>아이템 ID: {itemId !== null ? itemId : '없음'}</Text>
    </View> // View 컴포넌트의 끝입니다.
  ); // JSX 반환의 끝입니다.
};

export default DetailsScreen; // DetailsScreen 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
