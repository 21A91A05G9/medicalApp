import React, { useState } from 'react';
import { View, Modal, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign for the close icon

const UserDetails = ({ onClose }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSave = () => {
    // Handle saving user details here
    // For now, just close the modal
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            value={name}
            style={styles.input}
          />
          <TextInput
            placeholder="Age"
            onChangeText={(text) => setAge(text)}
            value={age}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button title="Save" onPress={handleSave} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 15, // Increase the border radius for rounded corners
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default UserDetails;
