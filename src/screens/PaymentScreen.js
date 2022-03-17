import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Image, View, Button, Text, TouchableOpacity } from 'react-native';
import CardSVG from '../components/CardSVG';

export default function PaymentScreen({setIsAuthenticated}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Payment</Text>
            <Image source={{uri: 'https://thumbs.dreamstime.com/b/headshot-portrait-smiling-businessman-posing-office-profile-picture-young-caucasian-suit-glasses-pose-modern-happy-214577125.jpg'}} style={styles.image}/>
            <Text style={{color: 'gray', fontWeight: 'bold', marginTop: 15}}>PAYING </Text>
            <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 15}}>Robert Downey, Jr. </Text>
            <Text style={{fontSize: 55, fontWeight: '500', marginBottom: 15}}>$50.00</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Add a note"
                placeholderTextColor="gray"
            />
            <CardSVG />
            <TouchableOpacity 
                onPress={() => setIsAuthenticated(false)}
                style={styles.btn}>
                <Text style={styles.text}>Log out</Text>
            </TouchableOpacity>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textInput: {
        width: '90%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#00000010',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    btn: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        marginTop: 50,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 15,
        paddingBottom: 20,
    }
})