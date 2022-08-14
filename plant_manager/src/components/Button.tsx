import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

// styles
import colors from '../styles/colors'

// texts
import MainText from '../texts/MainText'

// types
import { ButtonType } from '../@types/ButtonType'

export default function Button({ textButton, styleButton, onPress }: ButtonType) {
  return (
    <TouchableOpacity onPress={onPress}  style={[styles.background, styleButton]}>
      <MainText textStyles={styles.text}>{textButton}</MainText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green
    },

    text: {
        color: colors.white,
        fontSize: 17,
    }
})