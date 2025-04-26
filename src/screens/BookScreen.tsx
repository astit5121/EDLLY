import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';
import { books } from '../data/books';

type Props = NativeStackScreenProps<RootStackParamList, 'Book'>;

const cardColors = ['#FF6B6B', '#5F6AFF', '#FFA351', '#4AD991', '#20C997', '#845EC2'];

const BookScreen: React.FC<Props> = ({ route, navigation }) => {
  const { colors: themeColors } = useTheme();
  const { bookId } = route.params;
  const book = books.find((b) => b.id === bookId);

  if (!book) return <Text style={{ color: themeColors.text }}>Book not found</Text>;

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.header, { color: themeColors.text }]}>{book.title}</Text>
      <FlatList
        data={book.chapters}
        keyExtractor={(item) => item.id}
        numColumns={2}
        key={'2-columns'}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.card,
              {
                backgroundColor: getCardColor(index),
                borderColor: themeColors.border,
              },
            ]}
            onPress={() =>
              navigation.navigate('Chapter', {
                bookId,
                chapterId: item.id,
              })
            }
          >
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const getCardColor = (index: number) => {
  return cardColors[index % cardColors.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    flex: 1,
    height: 100,
    marginHorizontal: 4,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});

export default BookScreen;
