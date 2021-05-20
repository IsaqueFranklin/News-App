import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nautilus News</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 0,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '400',
    }
})

export default Header
