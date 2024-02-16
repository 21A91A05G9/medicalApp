import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddMedicationPopup = ({ isVisible, onClose, onAdd }) => {
  const [medicationName, setMedicationName] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [selectedTime, setSelectedTime] = useState(''); // Use a time picker component

  const handleAdd = () => {
    // Validate and save medication reminder details
    if (medicationName && numberOfDays && selectedTime) {
      onAdd({
        medicationName,
        numberOfDays: parseInt(numberOfDays, 10),
        selectedTime,
      });
      setMedicationName('');
      setNumberOfDays('');
      setSelectedTime('');
    }
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.popup}>
          <Text style={styles.title}>Add Medication Reminder</Text>
          <TextInput
            placeholder="Medication Name"
            value={medicationName}
            onChangeText={(text) => setMedicationName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Number of Days"
            value={numberOfDays}
            onChangeText={(text) => setNumberOfDays(text)}
            keyboardType="numeric"
            style={styles.input}
          />
          {/* Implement a time picker component here */}
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddMedicationPopup;
