import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';
import { books } from '../data/books';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const itemSize = screenWidth / numColumns - 30;

type Props = NativeStackScreenProps<RootStackParamList, 'BookList'>;

const colors = ['#FF6B6B', '#5D9CEC', '#4ECDC4', '#F7B733', '#AC92EC', '#48CFAD'];
const categories = ['All', 'Basics', 'Grammar', 'Science', 'Math', 'Stories'];

const BookListScreen: React.FC<Props> = ({ navigation }) => {
  const { colors: themeColors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All';
    return matchesSearch && matchesCategory;
  });

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TextInput
          style={[styles.searchInput, { backgroundColor: themeColors.card, color: themeColors.text }]}
          placeholder="Search books..."
          placeholderTextColor={themeColors.text + '99'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileText}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Category Filter */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              {
                backgroundColor:
                  selectedCategory === cat ? themeColors.primary : themeColors.card,
              },
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={{
                color: selectedCategory === cat ? '#fff' : themeColors.text,
                fontWeight: 'bold',
              }}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Header */}
      <Text style={[styles.header, { color: themeColors.text }]}>Book Stats</Text>

      {/* Book Grid */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={{ paddingBottom: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.card,
              {
                backgroundColor: colors[index % colors.length],
              },
            ]}
            onPress={() => navigation.navigate('Book', { bookId: item.id })}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
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
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    marginRight: 10,
  },
  profileButton: {
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  profileText: {
    fontSize: 18,
  },
  categoryScroll: {
    marginBottom: 10,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: itemSize,
    height: 140,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default BookListScreen;