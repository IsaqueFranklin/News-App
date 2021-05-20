import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PostList from '../components/PostList'

export default function Tech() {

    return (
        <ScrollView>
            <PostList pais={'br'} genero={'general'} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212529',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0,
      marginBottom: 100,
    },

  });
