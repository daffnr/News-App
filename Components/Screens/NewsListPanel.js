import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import VerticalCards from '../Shared/VerticalCards';
import axios from 'axios';

const NewsListPanel = ({ selectedCategory, navigation }) => {
    const FINANCEURL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=243a17541b4547cca402082a2a8ac4c0';
    const POLITICURL = 'https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=243a17541b4547cca402082a2a8ac4c0';
    const SPORTURL = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=243a17541b4547cca402082a2a8ac4c0';
    const TECHURL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=243a17541b4547cca402082a2a8ac4c0';
    const ECONOMYURL = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=243a17541b4547cca402082a2a8ac4c0';

    console.log(selectedCategory, "selected2")
    const [SelectedNews, setSelectedNews] = useState([]);

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

    const fetchTechNews = async () => {
        try {
            const result = await axios.get(TECHURL);
            console.log('Fetched Tech News:', result.data);
            if (result.data && result.data.articles) {
                setSelectedNews(result.data.articles);
            }
        } catch (error) {
            console.error('Error fetching Tech news:', error);
        }
    };

    const fetchEconomyNews = async () => {
        try {
            const result = await axios.get(ECONOMYURL);
            console.log('Fetched Market News:', result.data);
            if (result.data && result.data.articles) {
                setSelectedNews(result.data.articles);
            }
        } catch (error) {
            console.error('Error fetching Market news:', error);
        }
    };

    useEffect(() => {
        console.log('SelectedCategory:', selectedCategory);
        if (selectedCategory === 'Finance') {
            console.log(selectedCategory, 'select category')
            fetchFinanceNews();
        } else if (selectedCategory === 'Politics') {
            fetchPoliticNews();
        } else if (selectedCategory === 'Sports') {
            fetchSportNews();
        } else if (selectedCategory === 'Tech') {
            fetchTechNews();
        } else if (selectedCategory === 'Economy') {
            fetchEconomyNews();  
        } else {
            fetchFinanceNews();
        }
    }, [selectedCategory]);

    return (
        <View>
            {SelectedNews.length > 0 ? (
                SelectedNews.map(article => (
                    <TouchableOpacity onPress={() => navigation.navigate('news', article)} key={`${article.publishedAt}-${article.title || 'no-title'}`}>
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