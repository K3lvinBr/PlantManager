import { StyleSheet, Text } from 'react-native'
import React, { FunctionComponent } from 'react'

// styles
import fonts from '../styles/fonts'
import colors from '../styles/colors'

//type
import { TextProps } from '../@types/TextType'

const HeadingText: FunctionComponent<TextProps> = ({ children, textStyles }) => {
    return (
        <Text style={[styles.text, textStyles]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.heading,
        color: colors.heading,
    }
})

export default HeadingText