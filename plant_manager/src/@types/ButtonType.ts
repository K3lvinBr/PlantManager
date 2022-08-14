import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native"

export interface ButtonType {
    textButton: string
    styleButton?: StyleProp<ViewStyle>
    onPress: ((event: GestureResponderEvent) => void) | undefined
}
