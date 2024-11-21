// // src/HomeScreen.tsx

// import React from 'react'; // React 라이브러리를 가져옵니다.
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // React Native에서 사용할 UI 컴포넌트를 가져옵니다.
// import { StackNavigationProp } from '@react-navigation/stack'; // 스택 내비게이션에서 사용할 타입을 가져옵니다.
// import { RootStackParamList } from './App'; // 앱에서 정의한 매개변수 타입을 가져옵니다.
// import { atom, useAtom } from 'jotai'; // Jotai의 atom과 useAtom을 가져옵니다.

// export const itemIdAtom = atom<number | null>(null); // 아이템 ID를 저장할 Jotai atom을 생성하고 내보냅니다.

// type HomeScreenProps = { // HomeScreen에서 사용할 props의 타입을 정의합니다.
//   navigation: StackNavigationProp<RootStackParamList, 'Home'>; // 내비게이션 객체의 타입을 정의합니다.
// };

// const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => { // HomeScreen 컴포넌트를 정의합니다. navigation 객체를 props로 받습니다.
//   const [, setItemId] = useAtom(itemIdAtom); // atom에서 itemId를 설정하기 위한 useAtom 훅을 사용합니다.

//   const navigateToDetails = () => {
//     setItemId(42); // 아이템 ID를 설정합니다.
//     navigation.navigate('Details'); // 상세 화면으로 이동합니다.
//   };

//   const navigateToTabs = () => {
//     navigation.navigate('Tabs'); // Tabs 화면으로 이동합니다.
//   };

//   return ( // 컴포넌트가 반환할 JSX를 시작합니다.
//     <View style={styles.container}>
//       <Text style={styles.text}>홈 화면</Text>
//       <TouchableOpacity style={styles.button} onPress={navigateToDetails}>
//         <Text style={styles.buttonText}>상세 화면으로 이동</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={navigateToTabs}>
//         <Text style={styles.buttonText}>설정 및 프로필로 이동</Text>
//       </TouchableOpacity>
//     </View> // View 컴포넌트의 끝입니다.
//   ); // JSX 반환의 끝입니다.
// };

// const styles = StyleSheet.create({ // 스타일을 정의합니다.
//   container: { // 전체 컨테이너 스타일
//     flex: 1,
//     justifyContent: 'center', // 수직 가운데 정렬
//     alignItems: 'center', // 수평 가운데 정렬
//   },
//   text: { // 텍스트 스타일
//     fontSize: 24,
//     marginBottom: 20, // 버튼과의 간격
//   },
//   button: { // 버튼 스타일
//     backgroundColor: '#007BFF', // 버튼 배경 색상
//     padding: 10, // 버튼 패딩
//     borderRadius: 5, // 버튼 모서리 둥글기
//     margin: 10, // 버튼 간격
//     width: 200, // 버튼 너비
//     alignItems: 'center', // 버튼 텍스트 중앙 정렬
//   },
//   buttonText: { // 버튼 텍스트 스타일
//     color: 'white', // 텍스트 색상
//     fontSize: 18, // 텍스트 크기
//     textAlign: 'center', // 텍스트 중앙 정렬
//   },
// });

// export default HomeScreen; // HomeScreen 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
