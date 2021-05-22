import React from 'react'
import {WebView} from 'react-native-webview'
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native'

function ContentView() {
    
    return (
        <View style={styles.container}>
            <WebView source={{uri:bitch}} 
            style={styles.webview} 
            />
        </View>
    )
}

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    webview: {
        width: deviceWidth,
        height: deviceHeight,
        flex: 1,
    }
})

export default ContentView
