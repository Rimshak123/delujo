import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import NormalButton from "./NormalButton";

const Sellbody = () => {
  const [leftButtonPressed, setLeftButtonPressed] = useState(false);
  const [rightButtonPressed, setRightButtonPressed] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.sellBody}>
          {/* Heading */}
          <Text style={styles.sellHeading}>Sell</Text>

          {/* Title */}
          <Text style={styles.sellTitle}>
            Make your clients fall in love with some pictures
          </Text>

          <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handleImagePress("Image 1")}>
              <Image
                source={require("../assets/image.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress("Image 2")}>
              <Image
                source={require("../assets/image.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress("Image 3")}>
              <Image
                source={require("../assets/image.png")}
                style={styles.image}
              />
            </TouchableOpacity>
          </ScrollView>

          {/*Product details */}
          <Text style={styles.details}>Details</Text>
          <Text style={styles.text}>What is it?</Text>
          {/* Description container */}
          <View style={styles.descriptionContainer}>
            {/* Description box */}
            <TextInput
              style={styles.descriptionBox}
              placeholder="What are you selling?"
              multiline={true}
            />

            {/* Save button */}
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSavePress}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>

          {/* Details title */}
          <Text style={styles.description}>Discription</Text>

          {/* Details container with button */}
          <View style={styles.detailsContainer}>
            {/* Details box */}
            <TextInput
              style={styles.detailsBox}
              placeholder="Describe what you are selling,try to make it super interesting so people want to buy it!"
              multiline={true}
            />
            {/* Button */}
            <TouchableOpacity
              style={styles.saveButton2}
              onPress={handleDetailsButtonPress}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.quantityTitle}>Quantity</Text>
        <TouchableOpacity
          style={[styles.leftButton]}
          onPressIn={() => setLeftButtonPressed(true)}
          onPressOut={() => setLeftButtonPressed(false)}
        >
          <Text style={{ color: leftButtonPressed ? "#7252C5" : "#000" }}>
            Single
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rightButton]}
          onPressIn={() => setRightButtonPressed(true)}
          onPressOut={() => setRightButtonPressed(false)}
        >
          <Text style={{ color: rightButtonPressed ? "#7252C5" : "#000" }}>
            Multiple
          </Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Pricing</Text>
        <Text style={styles.originalPrice}>Original Price</Text>
        <TouchableOpacity
          style={styles.textbox}
          onPress={() => console.log("Text 1 pressed")}
        >
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput
              style={styles.text1}
              placeholder="40.000"
              multiline={true}
            />
          </View>
          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={styles.price}>$100</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.heading2}>Listing Price</Text>
        <TouchableOpacity
          style={styles.textbox}
          onPress={() => console.log("Text 2 pressed")}
        >
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput
              style={styles.text1}
              placeholder="40.000"
              multiline={true}
            />
          </View>
          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={styles.price}>$200</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.heading3}>You earn</Text>
        <TouchableOpacity
          style={styles.textbox}
          onPress={() => console.log("Text 3 pressed")}
        >
          <View style={[styles.left, { backgroundColor: "#7252C5" }]}>
            <TextInput
              style={styles.text2}
              placeholder="0,00"
              multiline={true}
            />
          </View>

          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={styles.price}>$300</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.detailsTitle1}>Discription</Text>

        {/* Details container with button */}
        <View style={styles.detailsContainer}>
          {/* Details box */}
          <TextInput
            style={styles.detailsBox}
            placeholder="Describe what you are selling,try to make it super interesting so people want to buy it!"
            multiline={true}
          />
          {/* Button */}
          <TouchableOpacity
            style={styles.saveButton2}
            onPress={handleDetailsButtonPress}
          >
            <Text style={styles.detailsButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Size</Text>
        <NormalButton
          title="Small"
          width={120}
          height={40}
          borderRadius={20}
          marginTop={-5}
          left={-70}
          backgroundColor="#7E4FFE"
        />
        <NormalButton
          title="Medium"
          width={120}
          height={40}
          borderRadius={20}
          marginTop={-40}
          left={80}
          backgroundColor="#d3d3d3"
        />
        <NormalButton
          title="Large"
          width={120}
          height={40}
          borderRadius={20}
          marginTop={10}
          left={-70}
          backgroundColor="#d3d3d3"
        />
        <NormalButton
          title="Extra Large"
          width={120}
          height={40}
          borderRadius={20}
          marginTop={-40}
          left={80}
          backgroundColor="#d3d3d3"
        />
        <Text style={styles.heading4}>Height:</Text>
        <TouchableOpacity
          style={styles.textbox1}
          onPress={() => console.log("Text 2 pressed")}
        >
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput style={styles.text1} multiline={true} />
          </View>
          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={styles.price}>CM</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.heading4}>Width:</Text>
        <TouchableOpacity
          style={styles.textbox1}
          onPress={() => console.log("Text 2 pressed")}
        >
          <View style={[styles.left, { backgroundColor: "#ffffff" }]}>
            <TextInput style={styles.text1} multiline={true} />
          </View>
          <View style={[styles.right, { backgroundColor: "#7252C5" }]}>
            <Text style={styles.price}>CM</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.tags}>Tags</Text>
        <TouchableOpacity
          style={[styles.leftButton]}
          onPressIn={() => setLeftButtonPressed(true)}
          onPressOut={() => setLeftButtonPressed(false)}
        >
          <Text style={{ color: leftButtonPressed ? "#7252C5" : "#000" }}>
            Yes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rightButton]}
          onPressIn={() => setRightButtonPressed(true)}
          onPressOut={() => setRightButtonPressed(false)}
        >
          <Text style={{ color: rightButtonPressed ? "#7252C5" : "#000" }}>
            No
          </Text>
        </TouchableOpacity>
        <Text style={styles.detailsTitle2}>Category</Text>
        <TouchableOpacity onPress={() => handleImagePress("Image 1")}>
          <Image
            source={require("../assets/btn-Mas2.png")}
            style={styles.image1}
          />
        </TouchableOpacity>
        <Text style={styles.detailsTitle2}>Brand</Text>
        <TouchableOpacity onPress={() => handleImagePress("Image 1")}>
          <Image
            source={require("../assets/btn-Mas2.png")}
            style={styles.image1}
          />
        </TouchableOpacity>
        <Text style={styles.detailsTitle2}>Color</Text>
        <TouchableOpacity onPress={() => handleImagePress("Image 1")}>
          <Image
            source={require("../assets/btn-Mas2.png")}
            style={styles.image1}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const handleImagePress = (image) => {
  console.log("Image Pressed:", image);
};

const handleSavePress = () => {
  console.log("Save button pressed");
};

const handleDetailsButtonPress = () => {
  console.log("Details button pressed");
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    backgroundColor: "#f3f3f3",
  },
  sellBody: {
    marginTop: -140,
    padding: 1,
    width: 358,
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
    marginTop:5,
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
  details: {
    marginTop: 20,
    marginBottom:18,
    fontSize: 18,
    color: "#7252C5",
    left: 23,
    fontWeight:'600',
    
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionBox: {
    height: 100,
    paddingLeft: 15,
    width: 320,
    top: 15,
    left: 15,
    //marginBottom:10,
    borderColor: "#7252C5",
    borderRadius: 20,
    borderWidth: 1,
    // marginTop:10,
    // paddingTop:-20,
  },
  quantityTitle: {
    marginTop: 25,
    fontSize: 16,
    left: -120,
    color: "black",
    marginBottom:15,
  },
  description: {
    marginTop: 25,
    fontSize: 16,
    left: 23,
    // color: "#696969",
    color:"black",
  
  },
  detailsTitle1: {
    marginTop: 20,
    fontSize: 18,
    left: -110,
    color: "#696969",
   
  },
  detailsTitle2: {
    marginTop: 20,
    fontSize: 18,
    // bottom:-10,
    left: -110,
    color: "#696969",
   
  },

  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tags: {
    color: "#7252C5",
    marginTop: 20,
    fontSize: 20,
    left: -120,
    fontWeight: "bold",
  marginBottom:20,
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
  saveButton: {
    marginLeft: -15,
    padding: 10,
    borderRadius: 5,
    marginTop: -110,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#7252C5",
    fontSize: 16,
    left: -20,
    fontWeight:"600",
  },
  saveButton2: {
    marginLeft: -15,
    padding: 10,
    borderRadius: 5,
    marginTop: -120,
    alignItems: "center",
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
  text: {
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

  heading4: {
    left: -130,
    top: 30,
    fontSize: 16,
    color: "#808080",
  },
  textbox1: {
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
    // width:10,
    alignItems: "center",
    justifyContent: "center",
  },

  right: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 60, // You can specify the width here
  },
  price: {
    color: "#ffffff",
  },
  text1: {
    color: "#d3d3d3",
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
});

export default Sellbody;
