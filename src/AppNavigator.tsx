// src/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import BookListScreen from './screens/BookListScreen';
import BookScreen from './screens/BookScreen';
import ChapterScreen from './screens/ChapterScreen';

export type RootStackParamList = {
  Home: undefined;
  BookList: undefined;
  Book: { bookId: string };
  Chapter: { bookId: string; chapterId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="BookList" component={BookListScreen} />
    <Stack.Screen name="Book" component={BookScreen} />
    <Stack.Screen name="Chapter" component={ChapterScreen} />
  </Stack.Navigator>
);
