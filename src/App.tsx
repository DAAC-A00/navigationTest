// src/App.tsx

import 'react-native-gesture-handler'; // react-native-gesture-handler 라이브러리를 임포트하여 제스처 핸들링 기능을 사용 가능하게 함
import * as React from 'react'; // React 라이브러리를 임포트
import { NavigationContainer } from '@react-navigation/native'; // 네비게이션 컨테이너를 임포트하여 앱의 네비게이션 구조를 정의
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer'; // Drawer 네비게이터와 관련된 타입을 임포트
import { View, Text, Button } from 'react-native'; // React Native의 기본 컴포넌트인 View, Text, Button을 임포트
import { RouteProp } from '@react-navigation/native'; // 라우트 속성을 정의하기 위해 RouteProp을 임포트

const Drawer = createDrawerNavigator(); // Drawer 네비게이터를 생성하여 Drawer 상수에 할당

// HomeScreenProps 타입 정의: navigation과 route 속성을 포함
type HomeScreenProps = {
  navigation: DrawerNavigationProp<any>; // Drawer 네비게이터의 navigation 속성 타입 정의
  route: RouteProp<any>; // 라우트 속성 타입 정의
};

// 홈 화면 컴포넌트 정의
function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>홈 화면</Text>
      <Button title="드로어 열기" onPress={() => navigation.openDrawer()} />
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

// 앱 컴포넌트 정의
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="홈">
        <Drawer.Screen name="홈" component={HomeScreen} />
        <Drawer.Screen name="설정" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
