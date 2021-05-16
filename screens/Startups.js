import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Startups() {
    return (
        <View style={styles.container}>
            <Text style={styles.textil}>Startups</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#152C2C',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textil: {
        color: '#fff',
    },
  });