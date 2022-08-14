import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

// styles
import colors from '../styles/colors'

export default function Search() {
  return (
      <View style={styles.search}>
        <AntDesign name='search1' size={15} color={colors.gray} />
        <TextInput style={styles.input}
          placeholder='pesquise uma planta'
          placeholderTextColor={colors.gray}
        />
      </View>
  )
}

const styles = StyleSheet.create({

  search: {
    width: 190,
    height: 40,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: colors.shape,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.white
  },

  input: {
    width: '100%',
    paddingHorizontal: 10,
  }
})