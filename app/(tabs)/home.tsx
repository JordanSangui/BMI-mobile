import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Calculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('Homme');

    const calculateIMC = () => {
        if (weight && height) {
            const weightNum = parseFloat(weight);
            const heightNum = parseFloat(height) / 100;
            const imc = weightNum / (heightNum * heightNum);
            router.push({
                pathname: '/result',
                params: { imc: imc.toFixed(1), weight, height, gender },
            });
        }
    };

    return (
        <LinearGradient
            colors={[
                'rgba(19, 111, 234, 0.85)',
                'rgba(103, 78, 224, 0.8)',
                'rgba(145, 23, 216, 0.75)',
            ]}
            locations={[0, 0.5, 0.8]}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.title}>
                    I<Text style={{ color: 'rgb(134, 223, 84)' }}>M</Text>C
                    <Text style={styles.subtitle}>Checker</Text>
                </Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Poids</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            value={weight}
                            onChangeText={setWeight}
                            keyboardType="numeric"
                            placeholder="poids"
                            placeholderTextColor="rgba(255,255,255,0.5)"
                        />
                        <Text style={styles.unit}>kg</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Taille</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            value={height}
                            onChangeText={setHeight}
                            keyboardType="numeric"
                            placeholder="taille"
                            placeholderTextColor="rgba(255,255,255,0.5)"
                        />
                        <Text style={styles.unit}>cm</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Sexe</Text>
                    {/* <View style={styles.genderContainer}>
                        {' '}
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}
                            style={{
                                color: 'white',
                                width: '100%',
                                transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                            }}
                            dropdownIconColor="white"
                        >
                            <Picker.Item
                                label="Homme"
                                value="homme"
                                style={{ color: 'black' }}
                            />
                            <Picker.Item
                                label="Femme"
                                value="femme"
                                style={{ color: 'black' }}
                            />
                        </Picker>
                    </View> */}
                    <View style={styles.genderContainer}>
                        <TouchableOpacity
                            style={[
                                styles.genderButton,
                                gender === 'Homme' && styles.genderButtonActive,
                            ]}
                            onPress={() => setGender('Homme')}
                        >
                            <Text
                                style={[
                                    styles.genderText,
                                    gender === 'Homme' &&
                                        styles.genderTextActive,
                                ]}
                            >
                                Homme
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.genderButton,
                                gender === 'Femme' && styles.genderButtonActive,
                            ]}
                            onPress={() => setGender('Femme')}
                        >
                            <Text
                                style={[
                                    styles.genderText,
                                    gender === 'Femme' &&
                                        styles.genderTextActive0,
                                ]}
                            >
                                Femme
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.calculateButton}
                    onPress={calculateIMC}
                >
                    <Text style={styles.calculateButtonText}>Calculer IMC</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'semibold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
        opacity: 0.8,
    },
    form: {
        flex: 1,
        marginTop: 70,
        alignItems: 'center',
    },
    inputContainer: {
        marginBottom: 40,
        gap: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'semibold',
        fontSize: 18,
        color: '#fff',
        marginBottom: 8,
    },
    inputWrapper: {
        width: 208,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    input: {
        flex: 1,
        height: 50,
        color: '#fff',
        fontSize: 18,
    },
    unit: {
        color: '#fff',
        fontSize: 18,
        opacity: 0.8,
    },
    genderContainer: {
        width: 208,
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.2)',
        // borderTopStartRadius: 8,
        // borderTopEndRadius: 8,
        // borderBottomWidth: 1,
        // borderBottomColor: 'white',
        // paddingHorizontal: 20,
        borderRadius: 50,
        overflow: 'hidden',
    },
    genderButton: {
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
    },
    genderButtonActive: {
        backgroundColor: '#fff',
    },
    genderText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
    },
    genderTextActive: {
        color: '#4a90e2',
    },
    genderTextActive0: {
        color: '#D34ED3',
    },
    calculateButton: {
        width: 208,
        backgroundColor: '#fff',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 32,
    },
    calculateButtonText: {
        color: '#4a90e2',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
