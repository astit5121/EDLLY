// src/screens/HomeScreen.tsx
import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.inner}>
      {/* App Name Styled with Bold and Stylish Font */}
      <Text style={styles.appName}>EDLLY</Text>

      {/* Centered Welcome Text */}
      <Text style={styles.title}>Hello!</Text>
    </View>

    {/* Start Button */}
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('BookList')}
    >
      <Text style={styles.buttonText}>START</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Pushes button to the bottom
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Light background color
    padding: 20,
  },
  inner: {
    flex: 1, // Takes up the available space before pushing button
    justifyContent: 'center', // Vertically centers content
    alignItems: 'center', // Horizontally centers content
    textAlign: 'center',
  },
  appName: {
    fontSize: 48, // Larger font size for the app name
    fontWeight: '900', // Very bold text for emphasis
    color: '#004b87',
    marginBottom: 40, // Spacing below the app name
    letterSpacing: 2, // Adds some spacing between the letters
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20, // Added space below to avoid too much cramping
  },
  button: {
    width: '80%', // Makes the button wider
    backgroundColor: '#0058a3', // Custom button color
    paddingVertical: 15, // Adds padding for height
    borderRadius: 10, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30, // Adds space below the button
  },
  buttonText: {
    fontSize: 24, // Larger text for the button
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;
