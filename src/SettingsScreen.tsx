// SettingsScreen.tsx

import React from 'react'; // React 라이브러리를 가져옵니다.
import { View, Text } from 'react-native'; // React Native에서 사용할 UI 컴포넌트를 가져옵니다.

const SettingsScreen: React.FC = () => { // SettingsScreen 컴포넌트를 정의합니다. props를 사용하지 않습니다.
  return ( // 컴포넌트가 반환할 JSX를 시작합니다.
    <View>
      <Text>설정 화면</Text>
    </View> // View 컴포넌트의 끝입니다.
  ); // JSX 반환의 끝입니다.
};

export default SettingsScreen; // SettingsScreen 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
