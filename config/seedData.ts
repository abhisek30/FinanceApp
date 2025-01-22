export interface CardStyle {
    backgroundColor: string;
    textColor: string;
}

export interface Card {
    id: string;
    type: string;
    currency: string;
    balance: string;
    accountNumber: string;
    validThru: string;
    flagIcon: any;
    cardTypeIcon?: any;
    style: CardStyle;

}

export interface Transaction {
    id: string;
    type: 'send' | 'receive';
    name: string;
    amount: string;
    time: string;
    date: string;
    accountNumber: string;
}

export interface User {
    id: string;
    name: string;
    avatar: any;
}

export interface DailyTransaction {
    day: string;
    shortDay: string;
    earnings: number;
    withdrawals: number;
}

export interface MonthlyData {
    month: string;
    shortMonth: string;
    isSelected?: boolean;
}

export interface CardStatistics {
    id: string;
    dailyTransactions: DailyTransaction[];
    months: MonthlyData[];
}

// seedData.ts
export const SEED_DATA = {
    user: {
        id: '1',
        name: 'Sarah Muller',
        avatar: require('../assets/images/placeholder.png'),
    },

    cards: [
        {
            id: '1',
            type: 'USD',
            currency: 'US Dollar',
            balance: '$40,500.80',
            accountNumber: '**** 9934',
            validThru: '05/28',
            flagIcon: require('../assets/images/us-flag.png'),
            cardTypeIcon: require('../assets/images/visa.png'),
            style: {
                backgroundColor: '#87DCFB',
                textColor: '#FFFFFF'
            }
        },
        {
            id: '2',
            type: 'Rupiah',
            currency: 'Rupiah',
            balance: 'Rp4.500.000',
            accountNumber: '**** 7732',
            validThru: '05/28',
            flagIcon: require('../assets/images/us-flag.png'),
            cardTypeIcon: require('../assets/images/visa.png'),
            style: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000'
            }
        },
        {
            id: '3',
            type: 'INR',
            currency: 'Indian Rupees',
            balance: '$10,450.80',
            accountNumber: '**** 1244',
            validThru: '07/30',
            flagIcon: require('../assets/images/us-flag.png'),
            cardTypeIcon: require('../assets/images/visa.png'),
            style: {
                backgroundColor: '#C8E9CA',
                textColor: '#000000'
            }
        },
    ] as Card[],

    transactions: [
        {
            id: '1',
            type: 'send',
            name: 'Transfer to Firmansyah A.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '2',
            type: 'receive',
            name: 'Receive from Adam S.',
            amount: '$1,300',
            time: '02:15 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '3',
            type: 'send',
            name: 'Transfer to John D.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '4',
            type: 'send',
            name: 'Transfer to Firmansyah A.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '5',
            type: 'receive',
            name: 'Receive from Adam S.',
            amount: '$1,300',
            time: '02:15 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '6',
            type: 'send',
            name: 'Transfer to John D.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '7',
            type: 'send',
            name: 'Transfer to John D.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '8',
            type: 'send',
            name: 'Transfer to Firmansyah A.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '9',
            type: 'receive',
            name: 'Receive from Adam S.',
            amount: '$1,300',
            time: '02:15 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '10',
            type: 'send',
            name: 'Transfer to Firmansyah A.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '11',
            type: 'receive',
            name: 'Receive from Adam S.',
            amount: '$1,300',
            time: '02:15 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
        {
            id: '12',
            type: 'send',
            name: 'Transfer to John D.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
            accountNumber: '9934',
        },
    ] as Transaction[],

    actions: [
        {
            id: '1',
            title: 'Request',
            icon: 'arrow-down',
        },
        {
            id: '2',
            title: 'Transfer',
            icon: 'arrow-up',
        },
    ],
    navigation: [
        {
            id: '1',
            icon: 'home',
            isActive: true,
        },
        {
            id: '2',
            icon: 'calendar-outline',
            isActive: false,
        },
        {
            id: '3',
            icon: 'card-outline',
            isActive: false,
        },
    ],

    cardStatistics: {
        "1": {
            dailyTransactions: [
                { day: "Sunday", shortDay: "Sun", earnings: 20.67, withdrawals: 15.40 },
                { day: "Monday", shortDay: "Mon", earnings: 37.90, withdrawals: 22.30 },
                { day: "Tuesday", shortDay: "Tue", earnings: 45.20, withdrawals: 18.90 },
                { day: "Wednesday", shortDay: "Wed", earnings: 26.41, withdrawals: 30.15 },
                { day: "Thursday", shortDay: "Thu", earnings: 57.89, withdrawals: 25.40 },
                { day: "Friday", shortDay: "Fri", earnings: 89.12, withdrawals: 10.20 },
                { day: "Saturday", shortDay: "Sat", earnings: 36.89, withdrawals: 5.40 }
            ],
            months: [
                { month: "October", shortMonth: "Oct", isSelected: true },
                { month: "November", shortMonth: "Nov" },
                { month: "December", shortMonth: "Dec" },
                { month: "January", shortMonth: "Jan" },
                { month: "February", shortMonth: "Feb" },
                { month: "March", shortMonth: "Mar" }
            ]
        },
        "2": {
            dailyTransactions: [
                { day: "Sunday", shortDay: "Sun", earnings: 20.67, withdrawals: 15.40 },
                { day: "Monday", shortDay: "Mon", earnings: 37.90, withdrawals: 22.30 },
                { day: "Tuesday", shortDay: "Tue", earnings: 45.20, withdrawals: 18.90 },
                { day: "Wednesday", shortDay: "Wed", earnings: 26.41, withdrawals: 30.15 },
                { day: "Thursday", shortDay: "Thu", earnings: 57.89, withdrawals: 25.40 },
                { day: "Friday", shortDay: "Fri", earnings: 89.12, withdrawals: 10.20 },
                { day: "Saturday", shortDay: "Sat", earnings: 36.89, withdrawals: 5.40 }
            ],
            months: [
                { month: "October", shortMonth: "Oct", isSelected: true },
                { month: "November", shortMonth: "Nov" },
                { month: "December", shortMonth: "Dec" },
                { month: "January", shortMonth: "Jan" },
                { month: "February", shortMonth: "Feb" },
                { month: "March", shortMonth: "Mar" }
            ]
        },
        "3": {
            dailyTransactions: [
                { day: "Sunday", shortDay: "Sun", earnings: 20.67, withdrawals: 15.40 },
                { day: "Monday", shortDay: "Mon", earnings: 37.90, withdrawals: 22.30 },
                { day: "Tuesday", shortDay: "Tue", earnings: 45.20, withdrawals: 18.90 },
                { day: "Wednesday", shortDay: "Wed", earnings: 26.41, withdrawals: 30.15 },
                { day: "Thursday", shortDay: "Thu", earnings: 57.89, withdrawals: 25.40 },
                { day: "Friday", shortDay: "Fri", earnings: 89.12, withdrawals: 10.20 },
                { day: "Saturday", shortDay: "Sat", earnings: 36.89, withdrawals: 5.40 }
            ],
            months: [
                { month: "October", shortMonth: "Oct", isSelected: true },
                { month: "November", shortMonth: "Nov" },
                { month: "December", shortMonth: "Dec" },
                { month: "January", shortMonth: "Jan" },
                { month: "February", shortMonth: "Feb" },
                { month: "March", shortMonth: "Mar" }
            ]
        },

    }
};
