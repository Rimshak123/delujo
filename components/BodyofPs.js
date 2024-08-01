import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView,StyleSheet,TouchableOpacity , Image} from 'react-native';
import NormalButton from "./NormalButton";
import axios from "axios";

const BodyofPs = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://192.168.18.19:5000/api/v1/auth/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
      <ScrollView>
        {users.map((user, index) => (
          <View key={index} style={{ marginTop:10,}}>
              <View style={{ marginTop:35, marginLeft:60}}>
               <Image source={require('../assets/p1-removebg-preview.png')} style={{height:20, width:25}} />
               </View>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            {/* <View style={{marginLeft:130, marginTop:5,marginBottom:90,}}>
            <NormalButton
          title="Follow"
          width={70}
          height={25}
          borderRadius={7}
          backgroundColor="#7051C4"
          // handleSignin={handleSignin}
           />
        </View>
               <TouchableOpacity style={styles.crossButton}>
          <Text style={styles.crossButtonText}>X</Text>
       </TouchableOpacity> */}
          </View>
        ))}
      </ScrollView>
       </View>
    </View>

  );};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    width: 395,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    backgroundColor: "#E7E7E7",
    padding: 20,
    height: 780,
    marginBottom: 600,
  },
  userName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#7252C5",
    marginLeft:100,
    marginTop:-25,
  },
  userEmail: {
    fontSize: 14,
    color: "#555555",
    marginLeft:100,
    
  },
    crossButton: {
    // padding: 5,
    marginLeft: 290,
    marginTop:-120,
  },
  crossButtonText: {
    color: '#7252C5',
    fontSize: 25,
    fontWeight:"500",
  },
})

export default BodyofPs;
