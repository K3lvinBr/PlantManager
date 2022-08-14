import { Image, StyleSheet, View, StatusBar } from 'react-native'
import React from 'react'

// styles
import colors from '../styles/colors'

// assets
import logo from '../assets/logo.png'

export default function Loading() {
    return (
        <View style={styles.background}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Image style={styles.image} source={logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        height: 300,
        width: 300,
        resizeMode: 'center'
    }
})