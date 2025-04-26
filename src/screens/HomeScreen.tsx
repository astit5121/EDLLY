import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { colors: themeColors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColors.background }]}>
      <View style={styles.inner}>
        <Text style={[styles.appName, { color: themeColors.primary }]}>EDLLY</Text>
        <Text style={[styles.title, { color: themeColors.text }]}>Hello!</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: themeColors.primary }]}
        onPress={() => navigation.navigate('BookList')}
      >
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  appName: {
    fontSize: 48,
    fontWeight: '900',
    marginBottom: 40,
    letterSpacing: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;
