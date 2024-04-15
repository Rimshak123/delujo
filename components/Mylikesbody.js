<<<<<<< HEAD
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
const Mylikesbody = () => {
  return (
    <View>
      <View style={styles.bodyContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Category</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>City</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Brand</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sale</Text>
          </TouchableOpacity>
        </View>
        {/* New line */}
        <View style={styles.horizontalLine}></View>

        {/* First Card */}
        <View style={styles.card}>
          <Image source={require('../assets/foto-001.png')} style={styles.image} />
          <Text style={styles.title1}>By oj82</Text>
          <Text style={styles.title2}>Tommy Hillfinger Sweater</Text>
          <Text style={styles.title3}>$35</Text>
          <View style={styles.circle}>
            <Text style={styles.title}>Size: Various</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Image source={require('../assets/icon-heart.png')} style={[styles.icon, styles.image3]} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/icon-bag.png')} style={[ styles.image4]} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/icon-comment.png')} style={[styles.icon, styles.image5]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Second Card */}
        <View style={styles.card3}>
          <Image source={require('../assets/foto-002.png')} style={styles.image} />
          <Text style={styles.title1}>By oj82</Text>
          <Text style={styles.title2}>Tommy Hillfinger Shirt</Text>
          <Text style={styles.title4}>$50</Text>
          <View style={styles.circle}>
            <Text style={styles.title}>Size: Large</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Image source={require('../assets/icon-heart.png')} style={[styles.image3]} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/icon-bag.png')} style={[styles.icon, styles.image4]} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/icon-comment.png')} style={[styles.icon, styles.image5]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
=======
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
//import Allcategory from "../components/Allcategory"
const Mylikesbody = () => {
  return (
    <View>
     <View style={styles.bodyContainer}>  
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>All</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Category</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>City</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Brand</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Sale</Text>
    </TouchableOpacity>
  </View>
  {/* New line */}
  <View style={styles.horizontalLine}></View>

  {/* First Card */}
  <View style={styles.card}>
    <Image source={require('../assets/foto-001.png')} style={styles.image} />
    <Text style={styles.title1}>By oj82</Text>
    <Text style={styles.title2}>Tommy Hillfinger Sweater</Text>
    <Text style={styles.title3}>$35</Text>
    <View style={styles.circle}>
      <Text style={styles.title}>Size: Various</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/icon-heart.png')} style={[styles.icon, styles.image3]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-bag.png')} style={[styles.icon, styles.image4]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-comment.png')} style={[styles.icon, styles.image5]} />
        </TouchableOpacity>
      </View>
    </View>
  </View>

  {/* Second Card */}
  <View style={styles.card3}>
    <Image source={require('../assets/foto-002.png')} style={styles.image} />
    <Text style={styles.title1}>By oj82</Text>
    <Text style={styles.title2}>Tommy Hillfinger Shirt</Text>
    <Text style={styles.title4}>$50</Text>
    <View style={styles.circle}>
      <Text style={styles.title}>Size: Large</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/icon-heart.png')} style={[styles.icon, styles.image3]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-bag.png')} style={[styles.icon, styles.image4]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-comment.png')} style={[styles.icon, styles.image5]} />
        </TouchableOpacity>
      </View>
     </View>
       </View>
       </View>
       </View>
   );       
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
};

export default Mylikesbody

const styles = StyleSheet.create({
<<<<<<< HEAD
  bodyContainer: {
    width: 400,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: "#dcdcdc",
    padding: 10,
    marginLeft: 0,
    height: 900,
    marginTop: -120,

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderBottomColor: 'black',
  },
  buttonText: {
    color: '#808080',
    textAlign: 'center',
    fontSize: 15,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
    marginTop: 10,
  },


  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 20,
    margin: 20,
    maxWidth: 160,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 10,
    height: 290,
    marginLeft: 20,
    //flexDirection:'row',
  },


  card3: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 20,
    margin: 20,
    //width: 306, // Set the width to 306
    maxWidth: 190, // Set the maximum width to 160
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // marginTop:30,
    //  marginTop:-10,
    // elevation: 2, // for android shadow
    height: 290,
    marginLeft: 189,
    marginTop: -310,
    // flexDirection:'row',
  },
  image: {
    width: 149,
    height: 130,
    marginBottom: 100,
    borderRadius: 8,
    // marginRight:30,
    marginLeft: -13,
    marginTop: -13,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title1: {
    color: '#808080',
    marginTop: -96,
    fontSize: 12,
  },
  title2: {
    fontSize: 13,
    // marginTop:-3
    // marginLeft:-1,
  },
  title3:
  {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 16,
  },
  title4:
  {
    fontWeight: 'bold',
    marginTop: 33,
    fontSize: 16,
  },



  circle: {
    position: 'absolute',
    top: -8,
    right: -20,
    width: 90,
    height: 20,
    //borderRadius: 35,
    backgroundColor: '#7252C5',
    zIndex: -1,
    marginRight: 30,
    //marginLeft:20,
    marginTop: 200,
  },
  title: {
    color: '#f4f0ec',
    marginLeft: 5,
  },
  image3: {
    width: 21,
    height: 18,
    marginLeft: -40,
    marginTop: 50,
  },
  image4: {
    width: 24,
    height: 17,
    marginLeft: 0,
    // marginRight:-4,
    marginTop: -15,
  },
  image5: {
    width: 22,
    height: 18,
    marginLeft: 40,
    marginTop: -17,
  },
=======
    bodyContainer: {
        width: 400, // Adjust width as needed
        borderTopLeftRadius: 100,
       borderTopRightRadius: 100,
       backgroundColor: "#dcdcdc",
       padding: 10,
       //marginBottom: 225,
       marginLeft:-20,
       height:700,
       marginTop:-50,
      },
 buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
      },
      button: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: 'transparent', 
        borderBottomColor: 'black', 
      },
      buttonText: {
        color: '#808080', 
        textAlign: 'center',
        fontSize: 12,
      },
      horizontalLine: {
        borderBottomWidth:1,
        borderBottomColor: '#a9a9a9',
        marginTop: 10, 
      },
    
     
      card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 20,
        margin: 20,
         maxWidth: 160, 
        shadowColor: '#000',
       shadowOpacity: 0.1,
        shadowRadius: 4,
        marginTop:10,
        height:290,
        marginLeft:20,
        //flexDirection:'row',
      },
      
      
          card3: {
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              padding: 20,
              margin: 20,
              //width: 306, // Set the width to 306
              maxWidth: 190, // Set the maximum width to 160
              shadowColor: '#000',
             // shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
             // marginTop:30,
            //  marginTop:-10,
             // elevation: 2, // for android shadow
              height:290,
              marginLeft:189,
              marginTop:-310,
             // flexDirection:'row',
            },
            image: {
                width: 149,
                height: 130,
                marginBottom: 100,
                borderRadius: 8,
              // marginRight:30,
              marginLeft:-13,
              marginTop:-13,
              },
              icons: {
                flexDirection: 'row',
                alignItems: 'center',
              },
              title1:{
              color:'#808080',
              marginTop:-96,
              fontSize:12,
              },
              title2:{
              fontSize:13,
             // marginTop:-3
             // marginLeft:-1,
              },
              title3:
              {
              fontWeight:'bold',
              marginTop:20,
              fontSize:16,
              },
              title4:
              {
              fontWeight:'bold',
              marginTop:33,
              fontSize:16,
              },



              circle: {
                position: 'absolute',
                top: -8,
                right: -20,
                width: 90,
                height: 20,
                //borderRadius: 35,
                backgroundColor:'#7252C5',
                zIndex: -1,
                marginRight:30,
                //marginLeft:20,
                marginTop:200,
              },
              title:{
                color:'#f4f0ec',
                marginLeft:5,
              },
              image3:{
                width: 21, 
                height: 18,
              marginLeft:-40,
                marginTop:50,
              },
              image4:{
                width: 24, 
                height: 17,
                marginLeft:0,
               // marginRight:-4,
                marginTop:-15,
              },
              image5:{
                width: 22, 
                height: 18,
                marginLeft:40,
                marginTop:-17,
              },            
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443


})