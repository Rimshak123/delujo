import React from 'react';
import { View, StyleSheet } from 'react-native';
import NormalButton from '../components/NormalButton';
import CustomButton from '../components/CustomButton';
const LoginBody = () => {
    return (
        <View style={styles.container}>
            <View style={styles.custombuttonContainer}>
                <CustomButton />
            </View>
            <View style={styles.facebook}>
                <NormalButton title="Signup with FaceBook" iconType="facebook" width={300} height={60} />
            </View>
            <View style={styles.google}>
                <NormalButton title="Signup with Google"iconType="google" width={300} height={60} />
            </View>
            <View style={styles.buttonContainer}>
                <NormalButton title="Login" width={130} height={40} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
    },

    facebook: {
        position: 'absolute',
        top: 80,

    },
     google: {
        position: 'absolute',
        top: 160,

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 80,
    },
    custombuttonContainer: {
        position: 'absolute',
        top: 40,
    },
});

export default LoginBody;
