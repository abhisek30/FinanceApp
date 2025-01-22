import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, } from 'react-native';

export default function QRCodeScanner() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [qrData, setQrData] = useState<string | null>(null);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {

        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}>
                    <Text style={styles.buttonText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }
    const handleBarCodeScanned = ({ data }: { data: string }) => {
        setScanned(true);
        setQrData(data);
        Alert.alert(
            'QR Code Scanned',
            `QR Data: ${data}`,
            [
                {
                    text: 'Scan Again',
                    onPress: () => {
                        setScanned(false);
                        setQrData(null);
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing}
                        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding : 30,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
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
