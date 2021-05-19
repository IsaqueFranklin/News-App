import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Image, FlatList, Pressable } from 'react-native'
import {WebView} from 'react-native-webview'

function PostList(props) {

    const { pais, genero } = props;
    
    const [isLoading, setLoading] = useState(true)
    const [news, setNews] = useState([]);
    const Sour = (bitch) => <WebView source={{uri:bitch}} />

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${pais}&category=${genero}&apiKey=741e3347eb154f3a8d9ed7c5940984ad`)
          .then((response) => response.json())
          .then((json) => setNews(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
          console.log(news.articles)
      }, []);


    return (
        <View style={styles.container}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                    data={news.articles}
                    keyExtractor={({ url }, index) => url}
                    renderItem={({ item }) => (
                        
                    <View style={styles.back}>

                    <Pressable
                        
                        onPress={<WebView source={{uri:item.url}} />}
                    >

                    <Image source={{uri:item.urlToImage}} style={styles.image} resizeMode="cover" />
                    <Text style={styles.textil}>{item.title}</Text>
                    
                    </Pressable>
                    </View>
                )}
                />
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 70,
        marginBottom: 90,
    },

    textil: {
        color: '#121212',
        marginBottom: 20,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
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
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 20,
        shadowColor: '#7F5DF0',   
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        alignItems: 'center',
    },
    
    button: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#171A20CC',
        width: 100,
        alignItems: 'center',
    }, 

    text: {
        fontSize: 12,
        fontWeight: '500',
        color: '#fff',
    },

    image: {
        minWidth: 290,
        padding: 10,
        height: 150,
        borderRadius: 12,
        alignItems: 'center',
    },
});

export default PostList
