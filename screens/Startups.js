import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PostList from '../components/PostList'

export default function Tech() {

    return (
        <ScrollView>
            <PostList pais={'br'} genero={'business'} />
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

  });