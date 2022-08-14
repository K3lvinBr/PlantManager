import { ReactNode } from "react"
import { StyleProp, TextStyle } from "react-native"

export interface TextProps {
    children: ReactNode
    textStyles?: StyleProp<TextStyle>
}