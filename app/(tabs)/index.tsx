import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {seedData} from '@/config/seedData';
import {Link} from "expo-router";

const HomeScreen = ({ navigation }: any) => {
    const renderTransactionItem = ({ item }: any) => (
        <View style={styles.transaction}>
            <Text style={styles.transactionDescription}>{item.description}</Text>
            <Text style={styles.transactionAmount}>{item.amount > 0 ? `+${item.amount}` : item.amount}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.accountInfo}>
                <Text style={styles.welcomeText}>Welcome back,</Text>
                <Text style={styles.userName}>{seedData.user.name}</Text>
                <View style={styles.accountDetails}>
                    <View style={styles.accountCard}>
                        <Text style={styles.cardCurrency}>{seedData.user.currency}</Text>
                        <Text style={styles.cardBalance}>${seedData.user.balance.toFixed(2)}</Text>
                        <Text style={styles.cardAccount}>Account Number: **** {seedData.user.accountNumber.slice(-4)}</Text>
                    </View>
                    <View style={styles.cardActions}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Request</Text>
                        </TouchableOpacity>
                        <Link href="../" style={styles.button}>
                            <Text style={styles.buttonText}>Transfer</Text>
                        </Link>
                    </View>
                </View>
            </View>


            <View style={styles.transactionHistory}>
                <Text style={styles.transactionHeader}>Transactions</Text>
                <FlatList
                    data={seedData.transactions}
                    renderItem={renderTransactionItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.transactionList}
                />
                <TouchableOpacity style={styles.viewAllButton}>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
    },
    accountInfo: {
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 16,
        color: '#171717',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#171717',
        marginVertical: 5,
    },
    accountDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    accountCard: {
        width: '65%',
        backgroundColor: '#87DCFB',
        padding: 15,
        borderRadius: 10,
    },
    cardCurrency: {
        fontSize: 14,
        color: '#FFF',
    },
    cardBalance: {
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    cardAccount: {
        fontSize: 12,
        color: '#FFF',
    },
    cardActions: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#171717',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    transactionHistory: {
        marginBottom: 40,
    },
    transactionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    transactionDescription: {
        fontSize: 16,
        color: '#171717',
    },
    transactionAmount: {
        fontSize: 16,
        color: '#171717',
    },
    viewAllButton: {
        alignItems: 'flex-end',
        marginTop: 10,
    },
    viewAllText: {
        fontSize: 14,
        color: '#87DCFB',
    },
    transactionList: {
        marginBottom: 20,
    },
});

export default HomeScreen;
