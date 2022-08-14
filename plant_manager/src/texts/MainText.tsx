import { StyleSheet, Text } from 'react-native'
import React, { FunctionComponent } from 'react'

// styles
import fonts from '../styles/fonts'

//type
import { TextProps } from '../@types/TextType'

const MainText: FunctionComponent<TextProps> = ({ children, textStyles }) => {
    return (
        <Text style={[styles.text, textStyles]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.main,
        fontWeight: '400',
    }
})

export default MainText