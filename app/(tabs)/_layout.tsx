import {Tabs} from 'expo-router';
import React from 'react';
import {TabBar} from "@/components/TabBar";

export default function TabLayout() {
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: '',
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
