import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Image, FlatList, Pressable, TouchableOpacity } from 'react-native'
import Header from './Header'
import ContentView from './ContentView'

function PostList(props) {

    const { pais, genero } = props;
    
    const [isLoading, setLoading] = useState(true)
    const [news, setNews] = useState([]);

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
            <Header />
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                    style={styles.list}
                    data={news.articles}
                    keyExtractor={({ url }, index) => url}
                    renderItem={({ item }) => (
                        
                    <View style={styles.back}>

                    <Pressable
                        
                        onPress={() => {ContentView({uri:item.url})}}
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
        marginTop: 53,
        marginBottom: 70,
        backgroundColor: '#212529',
    },

    textil: {
        color: '#fff',
        marginBottom: 20,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    },

    news: {
        marginBottom: 10,
        marginTop: 10,
        padding: 20,
    },

    back: {
        backgroundColor: '#343A40',
        flex: 1,
        marginBottom: 10,
        padding: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
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
        height: 200,
        borderRadius: 12,
        alignItems: 'center',
    },

    list: {
        marginTop: 50,
    }
});

export default PostList
