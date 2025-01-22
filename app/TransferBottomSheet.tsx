import React, {useCallback, useEffect, useRef, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet, {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {Transaction} from "@/config/seedData";

interface TransferBottomSheetProps {
    isVisible: boolean;
    onClose: () => void;
    onTransferComplete: (transfer: Transaction) => void;
}

export const TransferBottomSheet: React.FC<TransferBottomSheetProps> = ({
                                                                            isVisible,
                                                                            onClose,
                                                                            onTransferComplete,
                                                                        }) => {
    const [destinationName, setDestinationName] = useState('');
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    useEffect(() => {
        if (isVisible) {
            handlePresentModalPress();
        } else {
            bottomSheetModalRef.current?.dismiss();
            onClose();
        }
    }, [isVisible]);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
        if(index == -1) {
            bottomSheetModalRef.current?.dismiss();
            onClose();
        }
    }, []);


    const handleTransfer = () => {
        if (!destinationName || !amount || !cardNumber) return;

        const transfer: Transaction = {
            id: Date.now().toString(),
            type: 'send',
            name: 'Transfer to ' + destinationName,
            amount: '$' + parseFloat(amount).toString(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
            date: 'TODAY',
            accountNumber: cardNumber
        };

        onTransferComplete(transfer);
        onClose();
        setDestinationName('');
        setAmount('');
        setCardNumber('');
    };

    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
        >
            <BottomSheetView style={styles.contentContainer}>
                <View style={styles.bottomSheetContent}>
                    <Text style={styles.bottomSheetTitle}>Transfer Money</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Recipient Name"
                        value={destinationName}
                        onChangeText={setDestinationName}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Amount"
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType="numeric"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Card Number"
                        value={cardNumber}
                        onChangeText={setCardNumber}
                        keyboardType="numeric"
                    />

                    <TouchableOpacity style={styles.transferButton} onPress={handleTransfer}>
                        <Text style={styles.transferButtonText}>Transfer</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheetView>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    bottomSheetContent: {
        padding: 20,
        flex: 1,
    },
    bottomSheetTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        flex : 1,
    },
    transferButton: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        flex: 1,
    },
    transferButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});