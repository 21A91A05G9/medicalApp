import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MedicationReminderScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicine Reminder</Text>
      {/* Your content for medication reminders goes here */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMedication')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 36,
  },
});

export default MedicationReminderScreen;
