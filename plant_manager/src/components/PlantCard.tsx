import { Image, StyleSheet, View } from 'react-native';
import React from 'react'

// texts
import MainText from '../texts/MainText'
import HeadingText from '../texts/HeadingText'

// styles
import colors from '../styles/colors'

// images
import { images } from '../images/images';

// types
import { DataProps } from '../@types/PlantType'

export default function PlantCard({ data }: DataProps) {
    return (
        <View style={styles.backgroundCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
                <Image style={styles.plantImage} source={images[data.image]} />
                <View>
                    <HeadingText textStyles={styles.cardText}>{data.name}</HeadingText>
                    <MainText textStyles={styles.smallText}>{data.place}</MainText>
                </View>
            </View>
            <View style={styles.backgroundTime}>
                <MainText textStyles={styles.smallText}>Regar às</MainText>
                <MainText textStyles={styles.textTime}>{data.time.slice(0, 5)}</MainText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundCard: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 8,
        backgroundColor: colors.shape
    },

    plantImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 18,
        marginRight: 19,
    },

    cardText: {
        fontSize: 17,
    },

    smallText: {
        fontSize: 13,
        color: colors.gray
    },

    backgroundTime: {
        marginRight: 16,
    },

    textTime: {
        fontSize: 13,
        textAlign: 'right'
    }
})