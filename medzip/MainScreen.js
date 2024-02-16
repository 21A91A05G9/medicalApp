import React, { useRef, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, Animated, Easing, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation

const MainScreen = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation(); // Initialize navigation
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {``
    if (isLoading) {
      setTimeout(() => {
        navigation.navigate('NextScreen');
        setLoading(false);
      }, 0); // Navigate to NextScreen after 0 seconds
    }
  }, [isLoading, navigation]);

  const startButtonPressed = () => {
    setLoading(true);
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 100, // Animation duration in milliseconds
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Image source={require('./images/get-started.png')} style={styles.image} />
      {!isLoading ? (
        <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
          <TouchableOpacity onPress={startButtonPressed}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Add a background color for the screen
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 20,
    padding: 15, // Increase the padding for a larger button
    backgroundColor: 'blue',
    borderRadius: 25, // Round the button edges
    elevation: 5, // Add shadow for depth
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    marginTop: 20,
  },
});

export default MainScreen;
