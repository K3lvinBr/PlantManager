import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

// styles
import colors from '../styles/colors'

// texts
import MainText from '../texts/MainText'

// types
import { PlantType } from '../@types/PlantType';

interface Props {
    place: string
    onPress: ((event: GestureResponderEvent) => void) | undefined
    selected: PlantType
}

export default function PlaceCard({ place, onPress, selected }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.background, {
                borderColor: selected.place === place
                    ? colors.green
                    : colors.shape
            }]}
        >
            <MainText textStyles={styles.text}>{place}</MainText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    background: {
        width: 76,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 4,
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: colors.shape
    },

    text: {
        color: colors.heading
    }
})