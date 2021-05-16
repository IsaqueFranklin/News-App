import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, Button, Card, Icon, Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Tech() {

    const [isLoading, setLoading] = useState(true)
    const [news, setNews] = useState([]);
    const Sour = (bitch) => <WebView source={{uri:bitch}} />

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-04-15&sortBy=publishedAt&apiKey=741e3347eb154f3a8d9ed7c5940984ad')
          .then((response) => response.json())
          .then((json) => setNews(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

      console.log(news.articles)

    return (
        <ScrollView>
            <View style={styles.container}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                    data={news.articles}
                    keyExtractor={({ url }, index) => url}
                    renderItem={({ item }) => (

                    <View style={styles.back}>
                    <Image source={{uri:item.urlToImage}} />
                    <Text style={styles.textil}>{item.title}</Text>
                    <Button
                        style={styles.but}
                        onClick={<WebView source={{uri:item.url}} />}
                        icon={<Icon name='code' color='#ffffff' />}
                        title='Ler agora' />
                </View>
                )}
                />
                )}
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#152C2C',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 55,
      marginBottom: 100,
    },

    textil: {
        color: '#121212',
        marginBottom: 20,
        marginTop: 30,
    },

    news: {
        marginBottom: 10,
        marginTop: 20,
        padding: 20,
    },

    back: {
        backgroundColor: '#fff',
        flex: 1,
        marginBottom: 10,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        shadowColor: '#7F5DF0',   
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    
    but: {
        width: 20,
        padding: 10,
        marginTop: 10,
        borderRadius: 8,
    },

  });
