import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const GuideScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Guide To DeLujo</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Social Connectivity</Text>
          <Text style={styles.description}>
            At the heart of DeLujo is social connectivity. You can easily add friends, like, share, and comment on products, fostering a vibrant community experience. This not only enhances your shopping journey but also strengthens your social connections.
          </Text>

          <Text style={styles.sectionTitle}>Advanced Authentication</Text>
          <Text style={styles.description}>
            We prioritize security and convenience with our advanced authentication system. Easily log in using your email accounts, ensuring a flexible and user-friendly access to the app.
          </Text>

          <Text style={styles.sectionTitle}>Direct Messaging</Text>
          <Text style={styles.description}>
            Stay connected in real-time with our direct messaging system. Engage in private conversations with friends and fellow shoppers, enhancing your overall engagement and shopping experience.
          </Text>

          <Text style={styles.sectionTitle}>Groups and Communities</Text>
          <Text style={styles.description}>
            Discover our unique virtual hubs, Bundles and Parties, designed for in-depth discussions and exploration of specific products or themes. Join communities that resonate with your interests and engage in meaningful interactions.
          </Text>

          <Text style={styles.sectionTitle}>Secure Transactions</Text>
          <Text style={styles.description}>
            With integration of Stripe, rest assured that all financial transactions on DeLujo are secure and encrypted, providing you with peace of mind while you shop.
          </Text>

          <Text style={styles.sectionTitle}>Our Vision</Text>
          <Text style={styles.description}>
            At DeLujo, we aim to redefine how you shop by emphasizing social connection, user engagement, and the enjoyment of the shopping process. Join us in creating a vibrant community where shopping is not just a transaction, but a shared experience.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7252C5',
  },
  header: {
    backgroundColor: '#7252C5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop:55,
    marginBottom:30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F3F3F3',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F3F3F3',
    borderTopRightRadius: 75,
    borderTopLeftRadius: 75,
    marginTop: 0,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#7252C5',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    textAlign: 'justify', 
  },
});

GuideScreen.options = {
  headerShown: false,
};

export default GuideScreen;
