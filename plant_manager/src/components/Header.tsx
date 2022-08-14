import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import React, { FunctionComponent } from 'react'

// texts
import MainText from '../texts/MainText';
import HeadingText from '../texts/HeadingText';

// style
import colors from '../styles/colors'

interface TextProps {
    mainText: String
    subText: String
}

export const HeaderText: FunctionComponent<TextProps> = ({ mainText, subText }) => {
    return (
        <View>
            <MainText textStyles={styles.mainText}>{mainText}</MainText>
            <HeadingText textStyles={styles.subText}>{subText}</HeadingText>
        </View>
    )
}

interface PictureProps {
    source: ImageSourcePropType
}

export const HeaderPicture: FunctionComponent<PictureProps> = ({ source }) => {
    return (
        <View>
            <Image source={source} style={styles.picture} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 32,
        color: colors.heading,
        marginBottom: -8,
    },

    subText: {
        fontSize: 32,
    },

    picture: {
        height: 56,
        width: 56,
        borderRadius: 100,
    },
})