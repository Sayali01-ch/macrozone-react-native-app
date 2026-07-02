import * as Device from 'expo-device';
// import { Platform, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

//import { View, Text, StyleSheet } from "react-native";

// import { AnimatedIcon } from '@/components/animated-icon';
// import { HintRow } from '@/components/hint-row';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { WebBadge } from '@/components/web-badge';
// import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

// function getDevMenuHint() {
//   if (Platform.OS === 'web') {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }

// export default function HomeScreen() {
//   return (
//     <ThemedView style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
//         <ThemedView style={styles.heroSection}>
//           <AnimatedIcon />
//           <ThemedText type="title" style={styles.title}>
//             Welcome to&nbsp;Expo
//           </ThemedText>
//         </ThemedView>

//         <ThemedText type="code" style={styles.code}>
//           get started
//         </ThemedText>

//         <ThemedView type="backgroundElement" style={styles.stepContainer}>
//           <HintRow
//             title="Try editing"
//             hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
//           />
//           <HintRow title="Dev tools" hint={getDevMenuHint()} />
//           <HintRow
//             title="Fresh start"
//             hint={<ThemedText type="code">npm run reset-project</ThemedText>}
//           />
//         </ThemedView>

//         {Platform.OS === 'web' && <WebBadge />}
//       </SafeAreaView>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   safeArea: {
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     alignItems: 'center',
//     gap: Spacing.three,
//     paddingBottom: BottomTabInset + Spacing.three,
//     maxWidth: MaxContentWidth,
//   },
//   heroSection: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     gap: Spacing.four,
//   },
//   title: {
//     textAlign: 'center',
//   },
//   code: {
//     textTransform: 'uppercase',
//   },
//   stepContainer: {
//     gap: Spacing.three,
//     alignSelf: 'stretch',
//     paddingHorizontal: Spacing.three,
//     paddingVertical: Spacing.four,
//     borderRadius: Spacing.four,
//   },
// });


//import { Text, View } from 'react-native';

// export default function HomeScreen() {
//   return (
//     <View>
//       <Text>My App!</Text>
//     </View>
//   );
// }

// export default function HomeScreen(){
//   return(
//     <View>
//       <Text> Welcome to Macrozone!</Text>
//       <Text> Running on: {Platform.OS} </Text>
//       <Text> Device Model: {Device.modelName} </Text>
//       <Text> Device Brand: {Device.brand}</Text>
//       <Text> OS version: {Device.osVersion}</Text>
//      </View>
//      );
// }

// export default function HomeScreen(){
//   return(
//     <View style ={{flex:1, justifyContent:'center' , alignItems: 'center', backgroundColor: 'green'}}> 
//     <Text> Hello World</Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a1a2e',
//     paddingTop: 60,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   date: {
//     fontSize: 14,
//     color: '#a0a0b0',
//     marginTop: 4,
//     marginBottom: 30,
//   },
// });

import React from "react";
//import { ScrollView, Text, StyleSheet  } from "react-native";
// const today = new Date().toLocaleDateString("en-US", {weekday: "long", month: "long", day: "numeric",});
// export default function HomeScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>MacroZone</Text>
//       <Text style={styles.date}>{today}</Text>
//     </ScrollView>
//   );
// }
// console.log("RENDERING TODAY:", today);


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0c4174",
//     paddingHorizontal: 20,
//     paddingTop: 50,
//   },
//   title: {
//     fontSize: 38,
//     fontWeight: "bold",
//     color: "#111",
//   },
//   date: {
//     fontSize: 20,
//     color: "#666",
//     marginTop: 8,
//   },
// });
import{globalStyles} from '@/styles/global';
import {Link} from 'expo-router';
import{ScrollView ,Text} from 'react-native';
import HomeHeader from '@/components/HomeHeader';


export default function HomeScreen() {
  return( 
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader/>
      <Link href ='../add-meal' style={{ fontSize: 18, color: '#007bff'}}> </Link>
    </ScrollView>
  );
}
