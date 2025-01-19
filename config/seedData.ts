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
        { id: 1, type: 'Transfer', amount: -20, date: '04:03 PM', description: 'Transfer to FirmanSyah A.' },
        { id: 2, type: 'Receive', amount: 1300, date: '02:15 PM', description: 'Receive from Adam S.' },
        { id: 3, type: 'Transfer', amount: -20, date: '04:30 PM', description: 'Transfer to Firmansyah A.' },
    ],
};
