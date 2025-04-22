// src/screens/BookScreen.tsx
import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';
import { books } from '../data/books';

type Props = NativeStackScreenProps<RootStackParamList, 'Book'>;

const BookScreen: React.FC<Props> = ({ route, navigation }) => {
  const { bookId } = route.params;
  const book = books.find(b => b.id === bookId);

  if (!book) return <Text>Book not found</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{book.title}</Text>
      <FlatList
        data={book.chapters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chapterItem}
            onPress={() => navigation.navigate('Chapter', { bookId, chapterId: item.id })}
          >
            <Text style={styles.chapterTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  chapterItem: {
    padding: 15,
    backgroundColor: '#fff8dc',
    marginBottom: 12,
    borderRadius: 10,
  },
  chapterTitle: { fontSize: 18 },
});

export default BookScreen;
