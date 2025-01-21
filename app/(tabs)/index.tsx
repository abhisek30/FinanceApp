import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Ionicons} from '@expo/vector-icons';
import {SEED_DATA} from '@/config/seedData';
import {Card, Transaction as TransactionType} from '../../config/seedData';
import {router} from "expo-router";

const BankCard: React.FC<Card & { onPress?: (card: Card) => void , navigation: any}> = (props) => {
    const handlePress = () => {
        router.navigate('stats', { card: props });
    };
    return (
        <TouchableOpacity onPress={handlePress}
                          style={[styles.card, {backgroundColor: props.style.backgroundColor}]}>

            <View >
                <View style={styles.cardHeader}>
                    <View style={styles.currencyContainer}>
                        <Image source={props.flagIcon} style={styles.flag}/>
                        <Text style={[styles.currencyText, {color: props.style.textColor}]}>
                            {props.currency}
                        </Text>
                    </View>
                    {props.cardTypeIcon && <Image source={props.cardTypeIcon} style={styles.visaLogo}/>}
                </View>

                <View style={styles.balanceContainer}>
                    <Text style={[styles.balanceLabel, {color: props.style.textColor}]}>
                        Your balance
                    </Text>
                    <View style={styles.balanceRow}>
                        <Text style={[styles.balance, {color: props.style.textColor}]}>
                            {props.balance}
                        </Text>
                        <TouchableOpacity>
                            <Ionicons
                                name="eye-outline"
                                size={24}
                                color={props.style.textColor}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cardFooter}>
                    <View>
                        <Text style={[styles.footerLabel, {color: props.style.textColor}]}>
                            Account number
                        </Text>
                        <Text style={[styles.footerValue, {color: props.style.textColor}]}>
                            {props.accountNumber}
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.footerLabel, {color: props.style.textColor}]}>
                            Valid Thru
                        </Text>
                        <Text style={[styles.footerValue, {color: props.style.textColor}]}>
                            {props.validThru}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>);
};

const Transaction: React.FC<TransactionType> = ({type, name, amount, time, date}) => (
    <View style={styles.transaction}>
        <View style={styles.transactionLeft}>
            <Ionicons
                name={type === 'send' ? 'arrow-up' : 'arrow-down'}
                size={24}
                color="black"
            />
            <View>
                <Text style={styles.transactionName}>{name}</Text>
                <Text style={styles.transactionTime}>{time}</Text>
            </View>
        </View>
        <Text style={[
            styles.transactionAmount,
            type === 'send' ? styles.redText : styles.greenText
        ]}>
            {type === 'send' ? '- ' : '+ '}{amount}
        </Text>
    </View>
);

const TransactionsList: React.FC<{ transactions: TransactionType[] }> = ({transactions}) => {
    let currentDate = '';

    return (
        <View style={styles.transactionsList}>
            {transactions.map((transaction) => {
                const showDateHeader = currentDate !== transaction.date;
                currentDate = transaction.date;

                return (
                    <React.Fragment key={transaction.id}>
                        {showDateHeader && (
                            <Text style={styles.dateHeader}>{transaction.date}</Text>
                        )}
                        <Transaction {...transaction} />
                    </React.Fragment>
                );
            })}
        </View>
    );
};

export default function BankingApp({navigation}) {
    const {user, cards, transactions, actions} = SEED_DATA;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>

            <ScrollView
                style={styles.mainScroll}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <View style={styles.profile}>
                        <Image
                            source={user.avatar}
                            style={styles.avatar}
                        />
                        <View>
                            <Text style={styles.welcomeText}>Welcome back,</Text>
                            <Text style={styles.userName}>{user.name}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color="black"/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.sectionTitle}>Account</Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.cardsContainer}
                >
                    {cards.map((card) => (
                        <BankCard key={card.id} {...card} navigation={navigation} />
                ))}
                </ScrollView>

                <View style={styles.actionsContainer}>
                    {actions.map((action) => (
                        <TouchableOpacity key={action.id} style={styles.actionButton}>
                            <Ionicons name={action.icon as any} size={24} color="black"/>
                            <Text style={styles.actionText}>{action.title}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="add" size={24} color="white" style={styles.addButton}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.transactionsHeader}>
                    <Text style={styles.sectionTitle}>Transaction</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                </View>

                <TransactionsList transactions={transactions}/>
            </ScrollView>

            {/*<View style={styles.bottomNav}>
                {navigation.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.navItem}>
                        <Ionicons
                            name={item.icon as any}
                            size={24}
                            color={item.isActive ? 'black' : 'grey'}
                        />
                    </TouchableOpacity>
                ))}
            </View>*/}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    mainScroll: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    welcomeText: {
        fontSize: 14,
        color: '#666',
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
    },
    cardsContainer: {
        marginBottom: 24,
    },
    card: {
        width: 300,
        padding: 20,
        borderRadius: 20,
        marginRight: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    flag: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    currencyText: {
        fontSize: 16,
        fontWeight: '500',
    },
    visaLogo: {
        width: 48,
        height: 16,
    },
    balanceContainer: {
        marginBottom: 24,
    },
    balanceLabel: {
        fontSize: 14,
        marginBottom: 8,
    },
    balanceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    balance: {
        fontSize: 24,
        fontWeight: '600',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerLabel: {
        fontSize: 12,
        marginBottom: 4,
    },
    footerValue: {
        fontSize: 14,
        fontWeight: '500',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    actionButton: {
        alignItems: 'center',
        gap: 8,
    },
    actionText: {
        fontSize: 14,
    },
    addButton: {
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 20,
    },
    transactionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    viewAllText: {
        color: '#666',
    },
    transactionsList: {
        gap: 16,
        marginBottom: 16,
    },
    dateHeader: {
        fontSize: 12,
        color: '#666',
        marginTop: 8,
        marginBottom: 8,
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    transactionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    transactionName: {
        fontSize: 14,
        fontWeight: '500',
    },
    transactionTime: {
        fontSize: 12,
        color: '#666',
    },
    transactionAmount: {
        fontSize: 14,
        fontWeight: '500',
    },
    redText: {
        color: 'red',
    },
    greenText: {
        color: 'green',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#fff',
    },
    navItem: {
        padding: 8,
    },
});
