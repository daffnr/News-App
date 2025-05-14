import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import VerticalCards from '../Shared/VerticalCards';
import axios from 'axios';

const NewsListPanel = ({ SelectedCategory, navigation }) => {
    const FINANCEURL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=243a17541b4547cca402082a2a8ac4c0';
    const POLITICURL = 'https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=243a17541b4547cca402082a2a8ac4c0'; // corrected
    const SPORTURL = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=243a17541b4547cca402082a2a8ac4c0'; // corrected

    const [SelectedNews, setSelectedNews] = useState([]); // State untuk berita yang terpilih

    const fetchFinanceNews = async () => {
        try {
            const result = await axios.get(FINANCEURL);
            console.log('Fetched Finance News:', result.data);
            if (result.data && result.data.articles) {
                setSelectedNews(result.data.articles);
            }
        } catch (error) {
            console.error('Error fetching finance news:', error);
        }
    };

    const fetchPoliticNews = async () => {
        try {
            const result = await axios.get(POLITICURL);
            console.log('Fetched Political News:', result.data);
            if (result.data && result.data.articles) {
                setSelectedNews(result.data.articles);
            }
        } catch (error) {
            console.error('Error fetching political news:', error);
        }
    };

    const fetchSportNews = async () => {
        try {
            const result = await axios.get(SPORTURL);
            console.log('Fetched Sports News:', result.data);
            if (result.data && result.data.articles) {
                setSelectedNews(result.data.articles);
            }
        } catch (error) {
            console.error('Error fetching sports news:', error);
        }
    };

    useEffect(() => {
        console.log('SelectedCategory:', SelectedCategory); // Log untuk memeriksa kategori
        if (SelectedCategory === 'Finance') {
            fetchFinanceNews();
        } else if (SelectedCategory === 'Politics') {
            fetchPoliticNews();
        } else if (SelectedCategory === 'Sports') {
            fetchSportNews();
        } else {
            // Default to fetching finance news if category is not defined
            fetchFinanceNews();
        }
    }, [SelectedCategory]);

    return (
        <View>
            <Text>Hello NewsListPanel</Text>
            {SelectedNews.length > 0 ? (
                SelectedNews.map(article => (
                    <TouchableOpacity key={`${article.publishedAt}-${article.title || 'no-title'}`}>
                        <VerticalCards 
                            title={article.title || "No Title Available"} 
                            imageUrl={article.urlToImage} 
                        />
                    </TouchableOpacity>
                ))
            ) : (
                <Text>Please wait while we get your news.</Text>
            )}
        </View>
    );
};

export default NewsListPanel;

const styles = StyleSheet.create({});