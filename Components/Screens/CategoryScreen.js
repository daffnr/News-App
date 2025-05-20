import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryPanel from './CategoryPanel';
import NewsListPanel from './NewsListPanel';

const CategoryScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <View>
      <CategoryPanel navigation={navigation} setSelectedCategory={setSelectedCategory} />
      <NewsListPanel navigation={navigation} selectedCategory={selectedCategory}/> 
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});