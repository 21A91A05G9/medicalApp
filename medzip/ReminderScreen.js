import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert  } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome

const AlarmClockApp = () => {
  const [alarms, setAlarms] = useState([
    { name: "Default Alarm 1", time: new Date("2024-02-16T11:11:00") },
    { name: "Default Alarm 2", time: new Date("2024-02-16T11:10:00") },
    // Add more default alarms as needed
  ]);
  const soundObject = new Audio.Sound();
  const [fadeColor, setFadeColor] = useState(false);

  useEffect(() => {
    return () => {
      soundObject.unloadAsync(); // Unload audio when component unmounts
    };
  }, []);

  const cancelAlarm = (index) => {
    const updatedAlarms = [...alarms];
    updatedAlarms.splice(index, 1);
    setAlarms(updatedAlarms);
  };

  const playSound = async () => {
    try {
      await soundObject.loadAsync(require('./assets/alarm-sound.mp3'));
      await soundObject.playAsync();
      // After playing the sound, show an alert with options to snooze or stop the alarm
      Alert.alert(
        'Alarm',
        'Wake up!',
        [
          { text: 'Snooze', onPress: () => snoozeAlarm() },
          { text: 'Stop', onPress: () => stopAlarm() },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Failed to play the alarm sound', error);
    }
  };
  
  const snoozeAlarm = () => {
    // Stop the alarm sound
    soundObject.stopAsync();
  
    // Calculate the snooze time (5 minutes from now)
    const snoozeTime = new Date();
    snoozeTime.setMinutes(snoozeTime.getMinutes() + 5);
  
    // Add a new alarm for the snooze time
    setAlarms([...alarms, { name: "Snooze Alarm", time: snoozeTime }]);
  };
  
  const stopAlarm = () => {
    // Stop the alarm sound
    soundObject.stopAsync();
  };
  
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      alarms.forEach((alarm, index) => {
        if (now >= alarm.time) {
          playSound();
          cancelAlarm(index);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [alarms]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.alarmsContainer}>
        {alarms.map((alarm, index) => (
          <View key={index} style={[styles.alarmItem, { backgroundColor: fadeColor ? '#f0f0f0' : '#e0e0e0' }]}>
            <Text style={styles.alarmName}>{alarm.name}</Text>
            <Text style={styles.alarmTime}>{alarm.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            <FontAwesome name="minus" size={20} color="black" onPress={() => cancelAlarm(index)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  alarmsContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  alarmItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingHorizontal: 10, // Added paddingHorizontal for spacing
  },
  alarmName: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
  },
  alarmTime: {
    flex: 1,
    textAlign: 'center', // Centering the time
    fontSize: 18,
  },
});

export default AlarmClockApp;
