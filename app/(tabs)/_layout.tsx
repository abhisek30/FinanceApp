import {Stack, Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import StatisticsScreen from "@/app/stats";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    return (<Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
      <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
      />
      <Tabs.Screen
          name="explore"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
      />
    </Tabs>);
    /*return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="stats" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="auto"/>
        </ThemeProvider>
    );*/
}
