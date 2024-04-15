import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import NormalButton from '../components/NormalButton';
import Rating from '../components/Rating';
import Bar from '../components/Bar';
import Dogs from '../components/Dogs';
const Profiles = ({ imagePath, name, product, seller, }) => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image
                    source={imagePath}
                    style={styles.image}
                    resizeMode="cover" />
                <View style={{ marginLeft: 10, marginTop: -15, }}>
                    <Text style={{ position: 'relative' }}>
                        <Text style={{ color: '#7252C5', fontSize: 13, fontWeight: 500, }}>{name} </Text>
                        <Text style={{ color: '#8B8B8B', fontSize: 10, fontWeight: 500, }}> is selling </Text>
                        <Text style={{ color: '#7252C5', fontSize: 13, fontWeight: 500, }}> {product}</Text>
                    </Text>
                </View>
            </View>

            <View style={styles.rowContainer1}>
                <NormalButton
                title={
                    <Text style={{ fontSize: 10 }}>
                        <Text style={{ fontWeight: 'normal' }}>Seller </Text>
                        <Text style={{ fontWeight: 'bold' }}>{seller}</Text>
                    </Text>
                }
                width={70}
                height={25}
                borderRadius={8}
                marginTop={-15} />
                <View style={styles.rating}>
                    <Rating />
                    <Rating />
                    <Rating />
                    <Rating />
                    <Rating />
                </View>
            </View>
            <View style={styles.amount}>
            <Text style={{ fontWeight:"bold",fontSize:16, marginRight:15}}>$200</Text>
            <Text style={{fontSize:13, marginRight:15, textDecorationLine:'line-through', color:'#949494'}}>$400</Text>
            </View>
            <Dogs/>
      {/* <Dogs    imagePath={require('../assets/dogPic.png')}/>
      <Dogs    imagePath={require('../assets/dogPic.png')}/>
      <Dogs    imagePath={require('../assets/dogPic.png')}/> */}
            <View style={{ marginRight: 60, }}>
                <Bar />
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        // justifyContent: 'center',
        // alignItems: 'flex-end',
        width: 400,
        height: 280,
        borderColor: '#E3E3E3',
        // borderWidth:10,
        borderTopWidth: 25,
        // overflow: 'visible'
        // borderBottomWidth:20,
        //position:'relative',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 20,
    },
    image: {
        width: 50,
        height: 50,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 8,
        marginLeft: 5,
    },
    rowContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        left: 75,
    },
    bottomImageContainer: {
        alignSelf: 'flex-end',
        marginTop: 'auto',
        marginRight: 62,
        position: 'relative',
    },
    bar: {
        width: 336, // Adjust the width based on your requirement
        height: 46, // Adjust the height based on your requirement
        // marginBottom: 10, // Adjust the margin or spacing as needed
        alignItems: 'flex-end',
    },
    amount:{
        position: 'absolute',
        top: 20,
        left:270,
        flexDirection:'row',
    }
});

export default Profiles;
