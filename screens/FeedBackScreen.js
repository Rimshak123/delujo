import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Handle submission of feedback and email here
    console.log('Feedback:', feedback);
    console.log('Email:', email);
    setSubmitted(true);
    // You can add further logic like sending feedback to a server, etc.
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Feedback</Text>
      </View>
      <View style={styles.titleContainer2}>
        {submitted ? (
          <Text style={styles.thankYouMessage}>Thank you for your feedback!</Text>
        ) : (
          <>
             <Text style={styles.inputLabel}>Your Feedback</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your feedback"
              multiline
              numberOfLines={4}
              value={feedback}
              onChangeText={text => setFeedback(text)}
            />
               <Text style={styles.inputLabel}>Your Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Button
              mode="contained"
              style={styles.button}
              onPress={handleSubmit}
            >
              Submit Feedback
            </Button>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7252C5',
  },
  titleContainer: {
    backgroundColor: '#7252C5',
    borderRadius: 5,
    width: 400,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F3F3F3',
    textAlign: 'center',
    marginTop: 60,
  },
  titleContainer2: {
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
    width: 400,
    height: 760,
    borderTopRightRadius: 65,
    borderTopLeftRadius: 65,
    alignItems: 'center',
    paddingTop: 50,
  },
  inputLabel: {
    fontSize: 16,
    color: '#7252C5',
    alignSelf: 'flex-start',
    marginBottom: -5,
    marginLeft:65,
    paddingTop:30,
  },
 
  input: {
    width: 280,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7252C5',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#7252C5',
    width: '40%',
    borderRadius: 15,
  },
  thankYouMessage: {
    fontSize: 20,
    color: '#7252C5',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default FeedbackScreen;
