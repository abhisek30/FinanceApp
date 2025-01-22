import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { Card, CardStatistics } from '@/config/seedData';
import {SEED_DATA} from '@/config/seedData';


interface StatisticsScreenProps {
    card: Card;
    statistics: CardStatistics;
    onBack: () => void;
}

const StatisticsScreen: React.FC<StatisticsScreenProps> = ({
                                                               card = SEED_DATA.cards[1],
                                                               statistics = SEED_DATA.cardStatistics["1"],
                                                               onBack
                                                           }) => {

    const chartConfig = {
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        strokeWidth: 2,
        propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#fff'
        }
    };

    const data = {
        labels: statistics.dailyTransactions.map(t => t.shortDay),
        datasets: [{
            data: statistics.dailyTransactions.map(t => t.earnings),
            color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
            strokeWidth: 2
        }]
    };

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Statistic</Text>
            </View>


            <View style={styles.cardSummary}>
                <View style={styles.currencySelector}>
                    <Image source={card.flagIcon} style={styles.currencyFlag} />
                    <Text style={styles.currencyText}>{card.currency}</Text>
                    <Ionicons name="chevron-down" size={20} color="black" />
                </View>
                <Image source={card.cardTypeIcon} style={styles.cardTypeIcon} />

                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceLabel}>Your balance</Text>
                    <View style={styles.balanceRow}>
                        <Text style={styles.balance}>{card.balance}</Text>
                        <TouchableOpacity>
                            <Ionicons name="eye-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cardDetails}>
                    <View>
                        <Text style={styles.detailLabel}>Account number</Text>
                        <Text style={styles.detailValue}>{card.accountNumber}</Text>
                    </View>
                    <View>
                        <Text style={styles.detailLabel}>Valid Thru</Text>
                        <Text style={styles.detailValue}>{card.validThru}</Text>
                    </View>
                </View>
            </View>


            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.monthSelector}
            >
                {statistics.months.map((month, index) => (
                    <TouchableOpacity
                        key={month.shortMonth}
                        style={[
                            styles.monthItem,
                            month.isSelected && styles.monthItemSelected
                        ]}
                    >
                        <Text style={[
                            styles.monthText,
                            month.isSelected && styles.monthTextSelected
                        ]}>
                            {month.shortMonth}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>


            <View style={styles.graphContainer}>
                <View style={styles.graphHeader}>
                    <Text style={styles.graphTitle}>Transaction</Text>
                    <TouchableOpacity style={styles.earningsButton}>
                        <Text style={styles.earningsText}>Earnings</Text>
                        <Ionicons name="chevron-down" size={20} color="black" />
                    </TouchableOpacity>
                </View>

                <LineChart
                    data={data}
                    width={Dimensions.get('window').width - 40}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                    withDots={true}
                    withInnerLines={false}
                    withOuterLines={false}
                    withVerticalLabels={true}
                    withHorizontalLabels={false}
                    yAxisLabel="$"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        marginRight: 16,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    cardSummary: {
        backgroundColor: '#fff',
        margin: 20,
        padding: 20,
        borderRadius: 20,
    },
    currencySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 8,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    currencyFlag: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 8,
    },
    currencyText: {
        fontSize: 16,
        marginRight: 8,
    },
    cardTypeIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 48,
        height: 16,
    },
    balanceContainer: {
        marginTop: 20,
    },
    balanceLabel: {
        fontSize: 14,
        color: '#666',
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
    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    detailLabel: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '500',
    },
    monthSelector: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    monthItem: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginRight: 8,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    monthItemSelected: {
        backgroundColor: '#2196F3',
    },
    monthText: {
        color: '#666',
    },
    monthTextSelected: {
        color: '#fff',
    },
    graphContainer: {
        backgroundColor: '#fff',
        margin: 20,
        padding: 20,
        borderRadius: 20,
    },
    graphHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    graphTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    earningsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 8,
        borderRadius: 20,
    },
    earningsText: {
        marginRight: 8,
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    navItem: {
        padding: 8,
    },
});

export default StatisticsScreen;