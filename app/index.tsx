import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {Link, router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get('window');

const Card = ({ style, showRequest = false }) => (
    <View style={[styles.card, style]}>
        <View style={styles.currencyContainer}>
            <Image
                source={require('../assets/images/us-flag.png')}
                style={styles.flagIcon}
            />
            <Text style={styles.currencyText}>US Dollar</Text>
        </View>

        <Text style={styles.balanceLabel}>Your balance</Text>
        <View style={styles.balanceContainer}>
            <Text style={styles.balanceAmount}>$40,500.80</Text>
            <TouchableOpacity>
                <Ionicons name="eye-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <View style={styles.cardFooter}>
            <View>
                <Text style={styles.footerLabel}>Account number</Text>
                <Text style={styles.footerValue}>**** 9934</Text>
            </View>
            {!showRequest && (
                <View>
                    <Text style={styles.footerLabel}>Valid Thru</Text>
                    <Text style={styles.footerValue}>05/28</Text>
                </View>
            )}
        </View>
    </View>
);

export default function OnboardingScreen() {

    useEffect(() => {
        checkFirstLaunch();
    }, []);

    const checkFirstLaunch = async () => {
        try {
            const hasLaunched = await AsyncStorage.getItem('hasLaunched');
            if (hasLaunched === 'true') {
                router.replace('/(tabs)');
            }
        } catch (error) {
            console.error('Error checking first launch:', error);
        }
    };

    const handleGetStarted = async () => {
        try {
            await AsyncStorage.setItem('hasLaunched', 'true');
            router.replace('/(tabs)');
        } catch (error) {
            console.error('Error saving first launch:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.content}>
                <Text style={styles.logo}>ProfitPilot.</Text>

                <View style={styles.cardsStack}>
                    <LinearGradient
                        colors={['rgba(220, 255, 220, 0.9)', 'rgba(220, 255, 220, 0.7)']}
                        style={styles.middleCard}
                    >
                        <Card showRequest={true} />
                    </LinearGradient>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>Your{'\n'}Financial{'\n'}Navigator</Text>
                    <Text style={styles.description}>
                        Invest in projects that make a difference. Join us in supporting impactful initiatives and create a positive change in the world.
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    content: {
        flex: 1,
        padding: 24,
    },
    logo: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
        marginTop: 20,
    },
    curveContainer: {
        position: 'absolute',
        top: 60,
        right: width * 0.3,
        zIndex: 1,
    },
    cardsStack: {
        height: 120,
        marginTop: 20,
    },
    backgroundCard: {
        opacity: 0.3,
        transform: [{ rotate: '-5deg' }],
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
    },
    middleCard: {
        borderRadius: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    card: {
        backgroundColor: '#c8e9ca',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 20,
        marginBottom: 16,
    },
    flagIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 8,
    },
    currencyText: {
        fontSize: 14,
        fontWeight: '500',
    },
    balanceLabel: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
    },
    balanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    balanceAmount: {
        fontSize: 24,
        fontWeight: '600',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerLabel: {
        fontSize: 12,
        color: '#666666',
        marginBottom: 4,
    },
    footerValue: {
        fontSize: 14,
        fontWeight: '500',
    },
    requestButton: {
        position: 'absolute',
        bottom: -15,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    requestText: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '500',
    },
    textContainer: {
        marginTop: 180,
        marginBottom: 40,
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
        lineHeight: 48,
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#666666',
        lineHeight: 24,
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        marginTop: 'auto',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});