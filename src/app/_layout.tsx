  
import React from 'react';
// import { AnimatedSplashOverlay } from '@/components/animated-icon';
// import AppTabs from '@/components/app-tabs';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <AnimatedSplashOverlay />
//       <AppTabs />
//     </ThemeProvider>
//   );
// }


// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerTitle: 'MacroZone',
//       }}
//     />
//   );
// }
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' />
    </Stack>
  );
}