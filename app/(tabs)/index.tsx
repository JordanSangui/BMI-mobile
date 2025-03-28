import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Asplash() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.replace('/(tabs)/home'); // Va directement à index.js
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/newLogo.png')}
                style={styles.logo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: { width: 100, height: 100 }, // Ajuste selon ton logo
});
