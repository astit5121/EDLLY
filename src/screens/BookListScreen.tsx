// src/screens/BookListScreen.tsx
import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';
import { books } from '../data/books';

type Props = NativeStackScreenProps<RootStackParamList, 'BookList'>;

const BookListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Available Books</Text>

      {/* FlatList to display books */}
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bookItem}
            onPress={() => navigation.navigate('Book', { bookId: item.id })}
          >
            <View style={styles.bookCard}>
              {/* Optional: Add an image for each book if you have book covers */}
              <Text style={styles.bookTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff', // Light background color for the entire screen
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004b87', // Stylish dark blue color for header
    marginBottom: 20,
    textAlign: 'center',
  },
  bookItem: {
    marginBottom: 20, // Increased space between items
  },
  bookCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2a6b4', // Soft pink background for book items
    padding: 20, // Adjusted padding for better sizing
    borderRadius: 12,
    shadowColor: '#000', // Shadow for some depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, // Slightly increased shadow opacity for a more dramatic effect
    shadowRadius: 6,
    elevation: 5, // Elevation for Android shadow
    height: 120, // Height for each book item
    justifyContent: 'center', // Center contents vertically
    marginHorizontal: 10, // Ensures the box fills most of the width
  },
  bookImage: {
    height: 80, // Image size
    borderRadius: 10,
  },
  bookTitle: {
    fontSize: 24, // Larger font size for the book title
    fontWeight: '600',
    color: '#003366', // Dark blue for the title
    textAlign: 'center', // Ensure title is centered inside the box
    flex: 1, // Allow the title to take up remaining space and center it
    textAlignVertical: 'center', // Ensures vertical centering in the box (on Android)
  },
});

export default BookListScreen;
