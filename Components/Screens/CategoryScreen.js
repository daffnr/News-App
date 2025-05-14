import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryPanel from './CategoryPanel';
import NewsListPanel from './NewsListPanel';

const CategoryScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("Finance");

  useEffect(() => {
    alert(selectedCategory)
  }, [selectedCategory]);

  return (
    <View>
      <CategoryPanel setSelectedCategory={setSelectedCategory} />
      <NewsListPanel/> 
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});