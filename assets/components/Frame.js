import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Rating from '../components/Rating';
const Frame = ({ imagePath, productText, size, amount, vender, productstatus }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Frame.png')}
                style={styles.image}
            />
            <Image
                source={imagePath}
                style={styles.productImage}
            />
            <TouchableOpacity style={styles.touchableOpacity}>
                <Image
                    source={require('../assets/Adelante.png')}
                    style={styles.adelante}
                />
            </TouchableOpacity>
            <View style={styles.product}>
                <Text style={styles.textProduct}>
                    {productText}
                </Text>
            </View>
            <View style={styles.amount}>
                <Text style={styles.textAmount}>
                    {amount}
                </Text>
            </View>
            <View style={styles.vender}>
                <Text style={styles.textVender}>
                    Vendedor:
                </Text>
                <Text style={{ color: '#7252C5', fontSize: 11, paddingLeft: 5, }}>
                    {vender}
                </Text>
            </View>
            <View style={styles.size}>
                <Text style={styles.textSize}>
                    Size: {size}
                </Text>
            </View>
            <View style={styles.status}>
                <Text style={styles.textStatus}>
                    Status
                </Text>
                <Text style={{ color: '#E3DEF3', fontSize: 13, fontWeight: 'bold', paddingLeft: 5, }}>
                    {productstatus}
                </Text>
            </View>
            <View style={styles.rating}>
                <Rating />
                <Rating />
                <Rating />
                <Rating />
                <Rating />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 10,
        marginLeft: 15,
        marginRight: 10,
    },
    image: {
        width: 360,
        height: 150,
        resizeMode: 'cover',
    },
    productImage: {
        width: 104,
        height: 98,
        resizeMode: 'cover',
        marginTop: -125,
        marginLeft: -230,
    },
    adelante: {
        width: 35,
        height: 35,
        resizeMode: 'cover',
        // position:'absolute',
    },
    touchableOpacity: {
        marginTop: -105,
        left: 150,
    },
    product: {
        marginTop: -40,
        marginLeft: 20,
    },
    textProduct: {
        color: '#7252C5',
        fontSize: 15,
        fontWeight: '500'
    },
    amount: {
        marginTop: 3,
        marginLeft: -30,
    },
    textAmount: {
        color: '#333341',
        fontSize: 14,
        fontWeight: '500'
    },
    vender: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 0,
    },
    textVender: {
        color: '#8E8E94',
        fontSize: 11,
        fontWeight: '500'
    },
    size: {
        marginTop: -44,
        marginLeft: 145,
    },
    textSize: {
        color: '#DAD3EE',
        fontSize: 11,
    },
    status: {
        marginTop: 55,
        marginLeft: -5,
        flexDirection: 'row',
    },
    textStatus: {
        color: '#AD90F5',
        fontSize: 13,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -18,
        marginLeft: 250,
    },
});

export default Frame;
