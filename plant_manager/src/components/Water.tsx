import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

// styles
import colors from '../styles/colors'

// text
import MainText from '../texts/MainText'

// assets
import water from '../assets/water.png'

// types
import { DataProps } from '../@types/PlantType'

export default function Water({ data }: DataProps) {
    return (
        <View style={styles.waterBackground}>
            <Image source={water} style={styles.waterImage} />
            <MainText textStyles={styles.textWater}>
                {data
                ? `Regue sua ${data.name} ${'\n'} daqui a ${data.time.slice(0, 5)} horas`
                : 'Adicione novas plantas'
            }
            </MainText>
        </View>
    )
}

const styles = StyleSheet.create({
    waterBackground: {
        width: '100%',
        height: 88,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        borderRadius: 20,
    },

    waterImage: {
        marginLeft: 16,
        marginRight: 24,
    },

    textWater: {
        fontSize: 15,
        color: colors.blue,
    }
})