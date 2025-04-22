// src/screens/ChapterScreen.tsx
import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';
import { books } from '../data/books';

type Props = NativeStackScreenProps<RootStackParamList, 'Chapter'>;

const ChapterScreen: React.FC<Props> = ({ route }) => {
  const { bookId, chapterId } = route.params;

  // Find the book using bookId
  const book = books.find(b => b.id === bookId);
  
  // If the book is not found, return an error message
  if (!book) return <Text>Book not found</Text>;

  // Find the chapter within the selected book using chapterId
  const chapter = book.chapters.find(c => c.id === chapterId);
  
  // If the chapter is not found, return an error message
  if (!chapter) return <Text>Chapter not found</Text>;

  // Split content for styling (optional - only if you want fine-grained control)
  const lines = chapter.content.split('\n').map((line, index) => {
    const isHeading = line.startsWith('📘') || line.startsWith('🌟') || line.startsWith('🧠') || line.startsWith('🛠️') || line.startsWith('🔤') || line.startsWith('🧾') || line.startsWith('💬') || line.startsWith('🙋‍♂️') || line.startsWith('✍️') || line.startsWith('📌');
    return (
      <Text
        key={index}
        style={isHeading ? styles.heading : styles.content}
      >
        {line}
      </Text>
    );
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{chapter.title}</Text>
      <View style={styles.contentBox}>{lines}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff', // Light blue background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Underline title
    textAlign: 'center',
    marginBottom: 20,
    color: '#003366', // Dark blue color for the title
  },
  contentBox: {
    backgroundColor: '#ffffffcc', // Semi-white box on light blue
    padding: 16,
    borderRadius: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Underline headings
    marginTop: 14,
    marginBottom: 6,
    color: '#003366', // Dark blue color for headings
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    color: '#333', // Default text color
  },
});

export default ChapterScreen;
