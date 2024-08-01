import React, { useState , useEffect} from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Share,
  FlatList,
} from "react-native";
import axios from "axios";


const Bar = () => {
  // Liked Module
  const [imageState, setImageState] = useState({
    source: require("../assets/empty_heart-removebg-preview.png"),
    width: 80,
    height: 45,
    top: 4,
  });

  const toggleImage = () => {
    if (
      imageState.source ===
      require("../assets/empty_heart-removebg-preview.png")
    ) {
      setImageState({
        source: require("../assets/heart-filled-removebg-preview.png"),
        width: 40,
        height: 25,
        left: -15,
      });
      console.log("This item has been liked!");
    } else {
      setImageState({
        source: require("../assets/empty_heart-removebg-preview.png"),
        width: 80,
        height: 45,
        top: 4,
      });
      console.log("This item has been disliked!");
    }
  };
  // Comment Module
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const handleCommentPress = () => {
    setIsCommentModalVisible(true);
  };
  const handleSaveComment = async () => {
    try {
      await axios.post("http://192.168.18.19:5000/api/comments/save", {
        comment: comment,
      });
      console.log("Comment saved successfully");
    } catch (error) {
      console.error("Error saving comment:", error);
    }
  };
  // Share Module
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://192.168.18.19:5000/api/items/all");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out amazing products at DeLujo Market Place',

      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing content:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/CuadroRedondeado.png")}
        style={styles.mainImage}
        resizeMode="cover"
      />
      <View style={styles.overlayContainer}>
        {/* Liked Module */}
        <TouchableOpacity onPress={toggleImage}>
          <Image
            source={imageState.source}
            style={{
              width: imageState.width,
              height: imageState.height,
              left: imageState.left,
              top: imageState.top,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={{ marginRight: 30 }}></View>

        {/* Comment Module */}

        <TouchableOpacity onPress={handleCommentPress}>
          <Image
            source={require("../assets/comment-removebg-preview.png")}
            style={{ width: 49, height: 42, left: -15, top: -2 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isCommentModalVisible}
          onRequestClose={() => setIsCommentModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.input}
                placeholder="Add a comment..."
                value={comment}
                onChangeText={setComment}
              />
              <Button title="Post" onPress={handleSaveComment} color="#7252C5" />
            </View>
          </View>
        </Modal>
        <View style={{ marginRight: 35 }}></View>

        {/* Share Module */}

        <TouchableOpacity   onPress={onShare}> 
          <Image
            source={require("../assets/share-removebg-preview.png")}
            style={{ width: 49, height: 42, left: -15, top: -2 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  mainImage: {
    width: 340,
    height: 42, 
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  overlayImage: {
    width: 25,
    height: 25,
    // borderRadius: 25,
    margin: 5,
  },
  overlayImage1: {
    width: 25,
    height: 25,
    // borderRadius: 25,
    margin: 5,
  },
  icon: {
    color: "white",
    fontSize: 13,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  //share
  shareIcon: {
    width: 49,
    height: 42,
    left: -15,
    top: -2,
  },

});

export default Bar;
