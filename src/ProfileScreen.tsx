// src.ProfileScreen.tsx

import React from 'react'; // React 라이브러리를 가져옵니다.
import { View, Text, StyleSheet } from 'react-native'; // React Native에서 사용할 UI 컴포넌트를 가져옵니다.

const ProfileScreen: React.FC = () => { // ProfileScreen 컴포넌트를 정의합니다.
  return ( // 컴포넌트가 반환할 JSX를 시작합니다.
    <View style={styles.container}>
      <Text style={styles.text}>프로필 화면</Text>
    </View> // View 컴포넌트의 끝입니다.
  ); // JSX 반환의 끝입니다.
};

const styles = StyleSheet.create({ // 스타일을 정의합니다.
  container: { // 전체 컨테이너 스타일
    flex: 1,
    justifyContent: 'center', // 수직 가운데 정렬
    alignItems: 'center', // 수평 가운데 정렬
  },
  text: { // 텍스트 스타일
    fontSize: 24,
  },
});

export default ProfileScreen; // ProfileScreen 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
