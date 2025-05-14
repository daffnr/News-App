import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../Shared/Cards';
import { ScrollView } from 'react-native-gesture-handler';

const HeadlinePanel = ({ navigation }) => {
    const [HeadlineNews, setHeadlineNews] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=243a17541b4547cca402082a2a8ac4c0');
            setHeadlineNews(result.data);
            console.log(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View>
            <ScrollView horizontal>
                {HeadlineNews.articles ? (
                    HeadlineNews.articles.map(article => (
                        <View key={`${article.publishedAt}-${article.title || 'no-title'}`}>
                            <TouchableOpacity onPress={() => {/* Handle navigation */}}>
                                <Cards children={article.title || "No Title Available"} image={article.urlToImage} />
                            </TouchableOpacity>
                        </View>
                    ))
                ) : (
                    <Text>Please wait while we render your request.</Text>
                )}
            </ScrollView>
        </View>
    );
};

export default HeadlinePanel;

const styles = StyleSheet.create({});