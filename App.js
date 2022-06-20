// import 'react-native-gesture-handler';
// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
// import LoginScreen from './screens/LoginScreen';
// import ResgisterScreen from './screens/ResgisterScreen';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { ToastProvider } from 'react-native-toast-notifications'
// import HomeScreen from './screens/HomeScreen';
// import auth from '@react-native-firebase/auth';
// import app from '@react-native-firebase/app';


// const Stack = createNativeStackNavigator();

// // // // https://blog.logrocket.com/email-authentication-react-native-react-navigation-firebase/

// const globalScreenOptions = {
//     headerStyle: { backgroundColor: '#2C6BED' },
//     headerTitleStyle: { color: 'white' },
//     headerTintColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
// };

// const App = () => {



//     return (
      
//         <>
//         <ToastProvider>
//         <NavigationContainer >
//             <Stack.Navigator screenOptions={globalScreenOptions}>
//                 <Stack.Screen name='Login' component={LoginScreen}
//                     options={{
//                         headerTitleAlign: 'center'
//                     }}
//                 />
//                 <Stack.Screen name='Register' component={ResgisterScreen}
//                     options={{
//                         headerTitleAlign: 'center',
//                     }}
//                 />
//                 <Stack.Screen name='Home' component={HomeScreen}
//                     options={{
//                         headerTitleAlign: 'center'
//                     }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//         </ToastProvider>
//         </>


//     )
// }

// export default App

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });


import React from 'react';
import Providers from './src/navigation';
export default function App() {
  return <Providers />;
}