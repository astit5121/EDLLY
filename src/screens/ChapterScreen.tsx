import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';
import { books } from '../data/books';

type Props = NativeStackScreenProps<RootStackParamList, 'Chapter'>;

const ChapterScreen: React.FC<Props> = ({ route }) => {
  const { colors: themeColors } = useTheme();
  const { bookId, chapterId } = route.params;

  const book = books.find(b => b.id === bookId);
  if (!book) return <Text style={{ color: themeColors.text }}>Book not found</Text>;

  const chapter = book.chapters.find(c => c.id === chapterId);
  if (!chapter) return <Text style={{ color: themeColors.text }}>Chapter not found</Text>;

  const lines = chapter.content.split('\n').map((line, index) => {
    const isHeading = /^([📘🌟🧠🛠️🔤🧾💬🙋‍♂️✍️📌])/.test(line);
    return (
      <Text
        key={index}
        style={[
          isHeading ? styles.heading : styles.content,
          { color: themeColors.text },
        ]}
      >
        {line}
      </Text>
    );
  });

  return (
    <ScrollView style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>{chapter.title}</Text>
      <View style={[styles.contentBox, { backgroundColor: themeColors.card }]}>
        {lines}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 20,
  },
  contentBox: {
    padding: 16,
    borderRadius: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 14,
    marginBottom: 6,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
});

export default ChapterScreen;
