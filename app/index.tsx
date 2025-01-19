import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {seedData} from '../config/seedData';
import {Link} from "expo-router";

const OnboardingScreen = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appName}>ProfitPilot.</Text>
            </View>

            <View style={styles.accountCard}>
                <View style={styles.cardTop}>
                    <Text style={styles.currency}>{seedData.user.currency}</Text>
                    <Text style={styles.balance}>${seedData.user.balance.toFixed(2)}</Text>
                </View>
                <Text style={styles.accountNumber}>Account Number: **** {seedData.user.accountNumber.slice(-4)}</Text>
                <TouchableOpacity style={styles.requestButton}>
                    <Text style={styles.requestButtonText}>Request</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Your Financial Navigator</Text>
                <Text style={styles.subtitle}>
                    Invest in projects that make a difference. Join us in supporting impactful initiatives and create a
                    positive change.
                </Text>
            </View>

            <Link href="/(tabs)" style={styles.getStartedButton}>
                <Text style={styles.getStartedText}>Get Started</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF',
    },
    header: {
        marginBottom: 30,
    },
    appName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#171717',
        textAlign: 'center',
    },
    accountCard: {
        backgroundColor: '#87DCFB',
        width: '100%',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        alignItems: 'center',
    },
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    currency: {
        fontSize: 14,
        color: '#FFF',
    },
    balance: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
    },
    accountNumber: {
        fontSize: 12,
        color: '#FFF',
        marginVertical: 5,
    },
    requestButton: {
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginTop: 10,
    },
    requestButtonText: {
        color: '#171717',
        fontWeight: 'bold',
    },
    titleContainer: {
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#171717',
    },
    subtitle: {
        fontSize: 16,
        color: '#171717',
        marginTop: 10,
        paddingHorizontal: 30,
    },
    getStartedButton: {
        backgroundColor: '#171717',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 5,
        marginTop: 20,
    },
    getStartedText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default OnboardingScreen;
