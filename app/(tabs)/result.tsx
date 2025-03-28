import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Share2 } from 'lucide-react-native';
import Svg, { G, Path } from 'react-native-svg';

export default function Result() {
    const { imc, weight, height, gender } = useLocalSearchParams();
    const imcNum = parseFloat(imc as string);

    const getIMCCategory = () => {
        if (imcNum < 18.5) return 'Insuffisance pondérale';
        if (imcNum < 25) return 'Poids normal';
        if (imcNum < 30) return 'Surpoids';
        return 'Obésité';
    };

    const getMessage = () => {
        if (imcNum >= 18.5 && imcNum < 25) {
            return 'Félicitations ! vous semblez etre en pleine forme garder le cap !';
        }
        return 'Consultez un professionnel de santé pour des conseils personnalisés.';
    };

    const getGaugeRotation = () => {
        // Convert IMC to a rotation between -90 and 90 degrees
        const rotation = ((imcNum - 15) / 25) * 180 - 90;
        return Math.min(Math.max(rotation, -85.2), 85.2);
    };

    return (
        <LinearGradient
            colors={[
                'rgba(19, 111, 234, 0.85)',
                'rgba(103, 78, 224, 0.8)',
                'rgba(145, 23, 216, 0.75)',
            ]}
            locations={[0, 0.55, 0.8]}
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.replace('/(tabs)/home')}
                    style={styles.backButton}
                >
                    <ArrowLeft color="#fff" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>
                    <Share2 color="#fff" size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <View style={styles.gaugeContainer}>
                    <Svg
                        // xmlns="http://www.w3.org/2000/svg"
                        width={253.736}
                        height={128.61}
                        viewBox="0 0 253.736 128.61"
                        style={styles.jauge}
                    >
                        <G
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <Path
                                data-name="Path 1"
                                d="M146.98 206.651s-25.906 17.565-39.948 43.334-14.149 55.575-14.149 55.575"
                                stroke="#3bdcfc"
                                strokeWidth={8}
                                transform="translate(-88.757 -181.99)"
                            />
                            <Path
                                data-name="Path 2"
                                d="M157.3 200.8s26.329-15.256 57-14.8 42.8 7.2 58.8 14.8"
                                stroke="#42d54c"
                                strokeWidth={8}
                                transform="translate(-88.757 -181.99)"
                            />
                            <Path
                                data-name="Path 3"
                                d="M281.589 206.959s28.967 18.24 41.809 44.03 14.776 53.092 14.776 53.092"
                                stroke="#f03c37"
                                strokeWidth={8}
                                transform="translate(-88.757 -181.99)"
                            />
                        </G>
                    </Svg>

                    {/* <Image
                        source={require('../../assets/images/jauge.png')}
                        style={{ width: 40, height: 50 }}
                    /> */}
                    <View
                        style={[
                            styles.gaugeIndicator,
                            {
                                transform: [
                                    { rotate: `${getGaugeRotation()}deg` },
                                ],
                            },
                        ]}
                    >
                        <View
                            style={[
                                styles.boules,
                                imcNum > 18 && imcNum < 32
                                    ? {
                                          top: -5 + imcNum / 15,
                                          right: -7 + imcNum / 90,
                                      }
                                    : imcNum >= 32
                                    ? { top: -1, right: -6 }
                                    : { top: -5, right: -7 },
                                {
                                    backgroundColor:
                                        imcNum < 18.5
                                            ? '#3bdcfc'
                                            : imcNum < 25
                                            ? '#42d54c'
                                            : '#f03c37',
                                },
                            ]}
                        ></View>
                    </View>
                    {/* <View style={styles.gauge}>
                        
                    </View> */}
                    <View style={styles.imcDisplay}>
                        <View
                            style={[
                                styles.result,
                                {
                                    backgroundColor:
                                        imcNum < 18.5
                                            ? 'rgba(59,220,252,0.75)'
                                            : imcNum < 25
                                            ? 'rgba(59, 252, 91, 0.53)'
                                            : 'rgba(252, 59, 101, 0.5)',
                                },
                            ]}
                        >
                            <Text
                                style={{
                                    fontSize: 30,
                                    color: 'white',
                                    fontWeight: 'semibold',
                                }}
                            >
                                {imc}
                            </Text>
                        </View>
                        <Text style={styles.imcLabel}>IMC</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={styles.statsContainer}>
                        <View style={styles.info1}>
                            <Text style={styles.statValue}>Poids</Text>
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>
                                    {weight} kg
                                </Text>
                            </View>
                        </View>
                        <View style={styles.info1}>
                            <Text style={styles.statValue}>Taille</Text>
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>
                                    {height} cm
                                </Text>
                            </View>
                        </View>
                    </View>

                    <Image
                        source={require('../../assets/images/slim-man.png')}
                        style={styles.personImage}
                    />
                </View>

                <View style={styles.resultContainer}>
                    <Text style={styles.message}>Votre IMC</Text>
                    <View
                        style={[
                            styles.result,
                            {
                                backgroundColor:
                                    imcNum < 18.5
                                        ? 'rgba(59,220,252,0.75)'
                                        : imcNum < 25
                                        ? 'rgba(59, 252, 91, 0.53)'
                                        : 'rgba(252, 59, 101, 0.5)',
                            },
                        ]}
                    >
                        <Text
                            style={{
                                opacity: 1,
                                fontSize: 30,
                                color: '#ffff',
                                fontWeight: 'bold',
                            }}
                        >
                            {imc}
                        </Text>
                    </View>
                    <View style={styles.imcCategoryView}>
                        <Text style={styles.imcCategory}>
                            {getIMCCategory()}
                        </Text>
                    </View>
                </View>
                <Text style={styles.message2}>{getMessage()}</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 60,
    },
    backButton: {
        padding: 5,
    },
    shareButton: {
        padding: 8,
    },
    content: {
        flex: 1,
        gap: 20,
        // alignItems: 'center',
        // padding: 20,
    },
    gaugeContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
    },
    info1: {
        gap: 5,
    },
    jauge: { position: 'relative' },
    gauge: {
        width: 200,
        height: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        // backgroundColor: 'rgba(255,255,255,0.2)',
        borderTopWidth: 6,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        // borderBottomLeftRadius: 8,
        // borderBottomRightRadius: 8,

        // overflow: 'hidden',
        position: 'relative',
    },
    gaugeIndicator: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        width: 4,
        height: '100%',
        // backgroundColor: '#fff',
        transform: [
            { translateX: -2 }, // Décale vers la gauche de la moitié de la largeur
        ],
        transformOrigin: 'bottom',
    },
    boules: {
        width: 18,
        height: 18,
        position: 'absolute',
        borderRadius: 100,
    },
    imcDisplay: {
        position: 'absolute',
        top: '50%',
        alignItems: 'center',
    },
    imcValue: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    imcLabel: {
        fontSize: 18,
        color: '#fff',
        opacity: 0.8,
    },
    statsContainer: {
        gap: 25,
        marginBottom: 20,
    },
    statItem: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    statLabel: {
        fontSize: 30,
        color: '#fff',
        opacity: 0.8,
    },
    personImage: {
        width: 150,
        height: 320,
    },
    resultContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    result: {
        // opacity: 0.5,

        paddingVertical: 8,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    imcCategoryView: {
        flexDirection: 'row',
        width: 180,
    },
    imcCategory: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 11,
    },
    message: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.8,
        textAlign: 'center',
        paddingLeft: 20,
    },
    message2: {
        fontSize: 19,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 18,
    },
});
