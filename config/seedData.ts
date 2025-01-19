export const seedData = {
    user: {
        name: "Sarah Muller",
        balance: 40500.80,
        currency: "USD",
        accountNumber: "9934",
        expiryDate: "06/28",
    },
    cards: [
        {
            cardNumber: "1253 5432 3521 3090",
            name: "Sarah Muller",
            expiryDate: "09/24",
            cardType: "VISA",
            balance: 5000,
        },
        {
            cardNumber: "1253 5432 3521 3091",
            name: "Sarah Muller",
            expiryDate: "09/24",
            cardType: "VISA",
            balance: 3000,
        },
    ],
    transactions: [
        {id: 1, type: 'Transfer', amount: -20, date: '04:03 PM', description: 'Transfer to FirmanSyah A.'},
        {id: 2, type: 'Receive', amount: 1300, date: '02:15 PM', description: 'Receive from Adam S.'},
        {id: 3, type: 'Transfer', amount: -20, date: '04:30 PM', description: 'Transfer to Firmansyah A.'},
    ],
};

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
}

export interface User {
    id: string;
    name: string;
    avatar: any;
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
        },
        {
            id: '2',
            type: 'receive',
            name: 'Receive from Adam S.',
            amount: '$1,300',
            time: '02:15 PM',
            date: 'TODAY',
        },
        {
            id: '3',
            type: 'send',
            name: 'Transfer to John D.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
        },
        {
            id: '4',
            type: 'send',
            name: 'Transfer to Firmansyah A.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
        },
        {
            id: '5',
            type: 'receive',
            name: 'Receive from Adam S.',
            amount: '$1,300',
            time: '02:15 PM',
            date: 'TODAY',
        },
        {
            id: '6',
            type: 'send',
            name: 'Transfer to John D.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
        },
        {
            id: '7',
            type: 'send',
            name: 'Transfer to John D.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
        },
        {
            id: '8',
            type: 'send',
            name: 'Transfer to Firmansyah A.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
        },
        {
            id: '9',
            type: 'receive',
            name: 'Receive from Adam S.',
            amount: '$1,300',
            time: '02:15 PM',
            date: 'TODAY',
        },
        {
            id: '10',
            type: 'send',
            name: 'Transfer to Firmansyah A.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
        },
        {
            id: '11',
            type: 'receive',
            name: 'Receive from Adam S.',
            amount: '$1,300',
            time: '02:15 PM',
            date: 'TODAY',
        },
        {
            id: '12',
            type: 'send',
            name: 'Transfer to John D.',
            amount: '$20',
            time: '04:03 PM',
            date: 'TODAY',
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
};
