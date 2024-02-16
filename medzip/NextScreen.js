import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
const NextScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); // Initialize navigation
  const handleSave = () => {
    // Handle saving user details here
    // You can use the 'name', 'phoneNumber', and 'email' values
    // After saving, navigate to the ReminderScreen
    navigation.navigate('ReminderScreen');
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>User Details</Text>
      <TouchableOpacity activeOpacity={1} style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
          style={[styles.input, name && styles.inputFocused]}
        />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} style={styles.inputContainer}>
        <TextInput
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType="phone-pad"
          style={[styles.input, phoneNumber && styles.inputFocused]}
        />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} style={styles.inputContainer}>
        <TextInput
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          style={[styles.input, email && styles.inputFocused]}
        />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Add a background color for the screen
  },
  inputContainer: {
    width: '80%',
    borderBottomWidth: 2,
    borderColor: '#ccc', // Default border color
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: 'black',
  },
  inputFocused: {
    borderColor: 'blue', // Border color when focused
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 25,
    elevation: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NextScreen;
