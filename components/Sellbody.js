import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import UploadImage from "../components/UploadImage";

import axios from "axios";

const Sellbody = () => {
  const [inputText, setInputText] = useState("");
  const [productDetail, setDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [listingPrice, setListingPrice] = useState("");
  const [priceDescription, setPriceDescription] = useState("");
  const [size, setSize] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [tag, setTag] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const earnedPrice = listingPrice - originalPrice;
  const handleSaveData = async () => {
    try {
      await axios.post("http://192.168.18.19:5000/api/items/save", {
        product: inputText,
        description: productDetail,
        quantity: quantity,
        originalPrice: originalPrice,
        listingPrice: listingPrice,
        earnedPrice: earnedPrice,
        priceDescription: priceDescription,
        size: size,
        height: height,
        width: width,
        tag: tag,
        ownerName:ownerName,
        ownerEmail:ownerEmail,
      });
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  const [type, setType] = useState(null); // State to track whether 'Animal' or 'Bird' button is pressed
  const [leg, setLegs] = useState('');
  const [eat, seteat] = useState('');
  const [peak, setPeak] = useState('');
  const [kind, setKind] = useState('');

  const handleAnimalPress = () => {
    setType('Animal');
  };

  const handleBirdPress = () => {
    setType('Bird');
  };

  const renderAnimalInputs = () => (
    <View>
      <TextInput
        placeholder="Enter number of legs"
        value={height}
        onChangeText={text => setHeight(text)}
      />
      <TextInput
        placeholder="Enter the Feed"
        value={width}
        onChangeText={text => setWidth(text)}
      />
    </View>
  );

  const renderBirdInputs = () => (
    <View style={{marginLeft:-280}}>
      <TextInput
        placeholder="Enter peak"
        value={peak}
        onChangeText={text => setPeak(text)}
      />
      <TextInput
        placeholder="Enter kind"
        value={kind}
        onChangeText={text => setKind(text)}
      />
    </View>
  );
  const handleSinglePress = () => {
    setQuantity("Single");
  };
  const handleMultiplePress = () => {
    setQuantity("Multiple");
  };
  const handleYesTag = () => {
    setTag("Yes");
  };
  const handleNoTag = () => {
    setTag("No");
  };
  const handleSizeSmall = () => {
    setSize("Small");
  };
  const handleSizeMedium = () => {
    setSize("Medium");
  };
  const handleSizeLarge = () => {
    setSize("Large");
  };
  const handleSizeExtraLarge = () => {
    setSize("Extra Large");
  };

  return (
  

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.sellBody}>
          <Text style={styles.sellHeading}>Sell</Text>
          <Text style={styles.sellTitle}>
            Make your clients fall in love with some pictures{" "}
          </Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.imageContainer}
          >
            {/* <TouchableOpacity>
              <Image
                source={require("../assets/image.png")}
                style={styles.image}
              />
            </TouchableOpacity> */}
            <View style={{ marginLeft: 40 }}>
              <UploadImage />
            </View>
            <View style={{ marginLeft: 50 }}>
              <UploadImage />
            </View>
            <View style={{ marginLeft: 70 }}>
              <UploadImage />
            </View>
            {/* <TouchableOpacity>
              <Image
                source={require("../assets/image.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/image.png")}
                style={styles.image}
              />
            </TouchableOpacity> */}
          </ScrollView>

          <Text style={styles.productDetail}>Details</Text>
          <Text style={styles.detail}>What is it?</Text>
          <View style={styles.detailInput}>
            <TextInput
              style={styles.detailTextInput}
              placeholder="What are you selling?"
              multiline={true}
              value={inputText}
              onChangeText={setInputText}
            />
            {/* <TouchableOpacity style={styles.saveData} onPress={handleSaveData}>
              <Text style={styles.save}>Save</Text>
            </TouchableOpacity> */}
          </View>

          <Text style={styles.description}>Description</Text>
          <View style={styles.detailsContainer}>
            <TextInput
              style={styles.detailsBox}
              placeholder="Describe what you are selling,try to make it super interesting so people want to buy it!"
              multiline={true}
              value={productDetail}
              onChangeText={setDetails}
            />
          </View>
        </View>
        <Text style={{fontSize:20,fontFamily:'bold',color:"#7252C5",marginLeft:-220}} >
            Select type
          </Text>
        <TouchableOpacity style={styles.button} onPress={handleAnimalPress}>
          <Text style={styles.buttonText}>Animal</Text>
        </TouchableOpacity>
        <View style={{marginTop:20,}}></View>
        <View style={{marginLeft:-250,marginTop:-55}}>
        <TouchableOpacity style={styles.button} onPress={handleBirdPress}>
          <Text style={styles.buttonText}>Bird</Text>
        </TouchableOpacity>
        </View>
      {type === 'Animal' && renderAnimalInputs()}
      {type === 'Bird' && renderBirdInputs()}

        <Text style={styles.quantityTitle}>Quantity</Text>
        <TouchableOpacity
          style={[styles.leftButton]}
          onPress={handleSinglePress}
        >
          <Text style={{ color: "#FFFFFF" }}> Single</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rightButton]}
          onPress={handleMultiplePress}
        >
          <Text style={{ color: "#000" }}>Multiple</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Pricing</Text>
        <Text style={styles.originalPrice}>Original Price</Text>
        <View style={styles.textbox}>
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput
              style={styles.sizeInput}
              placeholder="40.000"
              multiline={true}
              value={originalPrice}
              onChangeText={setOriginalPrice}
            />
          </View>
          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={{ color: "#FFFFFF" }}>USD</Text>
          </View>
        </View>
        <Text style={styles.heading2}>Listing Price</Text>
        <View style={styles.textbox}>
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput
              style={styles.sizeInput}
              placeholder="30.000"
              multiline={true}
              value={listingPrice}
              onChangeText={setListingPrice}
            />
          </View>
          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={{ color: "#FFFFFF" }}>USD</Text>
          </View>
        </View>
        <Text style={styles.heading3}>You earn</Text>
        <View style={styles.textbox}>
          <View style={[styles.left, { backgroundColor: "#7252C5" }]}>
            <Text style={styles.earnedPrice}> {earnedPrice}</Text>
          </View>

          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={{ color: "#FFFFFF" }}>USD</Text>
          </View>
        </View>
        <Text style={styles.detailsTitle1}>Description</Text>

        <View style={styles.detailsContainer}>
          <TextInput
            style={styles.detailsBox}
            placeholder="Describe what you are selling,try to make it super interesting so people want to buy it!"
            multiline={true}
            value={priceDescription}
            onChangeText={setPriceDescription}
          />
        </View>
        <Text style={styles.heading}>Size</Text>
        <View style={{ left: -90 }}>
          <TouchableOpacity onPress={handleSizeSmall}>
            <View
              style={{
                width: 120,
                height: 40,
                backgroundColor: "#7E4FFE",
                borderRadius: 20,
                marginTop: 15,
              }}
            >
              <Text style={{ color: "#ffffff", marginTop: 10, marginLeft: 40 }}>
                Small
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSizeLarge}>
            <View
              style={{
                width: 120,
                height: 40,
                backgroundColor: "#7E4FFE",
                borderRadius: 20,
                marginTop: 15,
              }}
            >
              <Text style={{ color: "#ffffff", marginTop: 10, marginLeft: 40 }}>
                Large
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ left: 80 }}>
          <TouchableOpacity onPress={handleSizeMedium}>
            <View
              style={{
                width: 120,
                height: 40,
                backgroundColor: "#7E4FFE",
                borderRadius: 20,
                marginTop: -95,
              }}
            >
              <Text style={{ color: "#ffffff", marginTop: 10, marginLeft: 40 }}>
                Medium
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSizeExtraLarge}>
            <View
              style={{
                width: 120,
                height: 40,
                backgroundColor: "#7E4FFE",
                borderRadius: 20,
                marginTop: -37,
              }}
            >
              <Text style={{ color: "#ffffff", marginTop: 10, marginLeft: 33 }}>
                Extra Large
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Size */}
        <Text style={styles.size}>Height:</Text>
        <View style={styles.sizeTextBox}>
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput
              style={styles.sizeInput}
              multiline={true}
              value={height}
              onChangeText={setHeight}
            />
          </View>
          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={{ color: "#ffffff" }}>CM</Text>
          </View>
        </View>
        <Text style={styles.size}>Width:</Text>
        <View style={styles.sizeTextBox}>
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput
              style={styles.sizeInput}
              multiline={true}
              value={width}
              onChangeText={setWidth}
            />
          </View>
          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={{ color: "#ffffff" }}>CM</Text>
          </View>
        </View>
        {/* Tags */}
        <Text style={styles.tags}>Tags</Text>
        <TouchableOpacity style={[styles.leftButton]} onPress={handleYesTag}>
          <Text style={{ color: "#FFFFFF" }}> Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.rightButton]} onPress={handleNoTag}>
          <Text style={{ color: "#000" }}>No</Text>
        </TouchableOpacity>

       

        {/* Owner Information */}
        <Text style={styles.ownerInformation}>Owner Information</Text>
        <View style={styles.ownercontainer}>
        <Text style={styles.size}>Name</Text>
        <View style={styles.sizeTextBox}>
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput
              style={styles.sizeInput}
              multiline={true}
               placeholder="Enter name"
            placeholderTextColor="#808080"
              value={ownerName}
              onChangeText={setOwnerName}
            />
          </View>
          
        </View>
        
        <Text style={styles.size}>Email</Text>
        <View style={styles.sizeTextBox}>
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput
              style={styles.sizeInput}
              multiline={true}
               placeholder="Enter email"
            placeholderTextColor="#808080"
              value={ownerEmail}
              onChangeText={setOwnerEmail}
            />
          </View>
          
        </View>
        </View>
        <TouchableOpacity
          style={{ alignItems: "center", marginBottom: 35  , backgroundColor: "#7252C5", height:40, width:100, borderRadius:10, marginBottom:50,}}
          onPress={handleSaveData}
        >
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>


        
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
 button: {
    backgroundColor: '#7252C5',
    padding: 10,
    borderRadius: 10, // Adjust the radius as needed
    marginHorizontal: 5,
    width:100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  sellBody: {
    marginTop: -140,
    width: 400,
  },
  sellHeading: {
    marginTop: 160,
    fontSize: 27,
    fontWeight: "bold",
    color: "#7252C5",
    textAlign: "center",
  },
  sellTitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#696969",
    marginTop: 5,
  },
  imageContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 150,
    marginRight: -5,
  },
  image1: {
    width: 40,
    height: 40,
    left: 100,
    top: -25,
  },
  productDetail: {
    marginTop: 20,
    marginBottom: 18,
    fontSize: 18,
    color: "#7252C5",
    left: 23,
    fontWeight: "600",
  },
  detailInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailTextInput: {
    height: 100,
    paddingLeft: 15,
    width: 320,
    top: 15,
    left: 15,
    borderColor: "#7252C5",
    borderRadius: 20,
    borderWidth: 1,
  },
  quantityTitle: {
    marginTop: 25,
    fontSize: 16,
    left: -120,
    color: "black",
    marginBottom: 15,
  },
  description: {
    marginTop: 25,
    fontSize: 16,
    left: 23,
    // color: "#696969",
    color: "black",
  },
  detailsTitle1: {
    marginTop: 20,
    fontSize: 18,
    left: -110,
    color: "#696969",
  },
 

  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  tags: {
    color: "#7252C5",
    marginTop: 20,
    fontSize: 20,
    left: -120,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailsBox: {
    height: 100,
    padding: 20,
    top: 10,
    borderColor: "#7252C5",
    borderWidth: 1,
    borderRadius: 20,
    width: 320,
    left: 15,
  },
  earnedPrice: {
    color: "#ffffff",
    marginLeft: -140,
  },

  save: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "600",
  },

  leftButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 155,
    height: 40,
    fontSize: 13,
    left: -70,
    backgroundColor: "#7252C5",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },

  rightButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 150,
    height: 40,
    fontSize: 10,
    left: 80,
    top: -40,
    backgroundColor: "lightgray",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    // marginBottom: 30,
  },
  detail: {
    top: 5,
    left: 30,
    color: "black",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 10,
    color: "#7252C5",
    fontWeight: "bold",
  },

  size: {
    left: -130,
    top: 30,
    fontSize: 16,
    color: "#808080",
  },
  sizeTextBox: {
    flexDirection: "row",
    marginBottom: 10,
    // borderColor:'#7252C5',
    width: 220,
    left: 30,
  },

  textbox: {
    flexDirection: "row",
    marginBottom: 10,
    // borderColor:'#7252C5',
    width: 260,
  },

  left: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  right: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
  },

  sizeInput: {
    color: "#000",
    marginLeft: -120,
  },
  text2: {
    color: "#ffffff",
    marginLeft: -120,
  },
  originalPrice: {
    marginLeft: -160,
    color: "#242124",
    marginBottom: 5,
  },
  heading2: {
    marginLeft: -160,
    color: "#242124",
    marginBottom: 5,
  },
  heading3: {
    marginLeft: -180,
    color: "#242124",
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginLeft: 30,
  },

  ownercontainer: {
    width: "85%",
    padding: 25,
    borderRadius: 10,
    borderColor: "#7252C5",
    borderWidth: 1.5,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    marginBottom:50,
  },
  ownerInformation: {
    color: "#7252C5",
    marginTop: 20,
    fontSize: 22,
    left: -70,
    fontWeight: "bold",
    marginBottom: 20,
  },

});

export default Sellbody;

  