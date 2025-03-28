import { Tabs } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { display: 'none' },
            }}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name="result" />
        </Tabs>
    );
}
